import { readFile, access } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const readJson = async (path) => JSON.parse(await readFile(resolve(root, path), "utf8"));

const styleLibrary = await readJson("data/style-library.json");
const caseLibrary = await readJson("data/recruitment-cases.json");
const brandBenchmarkLibrary = await readJson("data/brand-recruitment-cases.json");
const templateText = await readFile(resolve(root, "docs/templates.md"), "utf8");

const errors = [];
const requiredCaseFields = [
  "id",
  "slug",
  "title",
  "asset",
  "assetMeta",
  "source",
  "rights",
  "layoutFamily",
  "compositionDensity",
  "designEngine",
  "reusableElements",
  "layoutZones",
  "whyItWorks",
  "riskNotes"
];

if (caseLibrary.cases.length !== caseLibrary.category.caseCount) {
  errors.push("通用案例 category.caseCount 与 cases 数量不一致");
}
if (brandBenchmarkLibrary.cases.length !== brandBenchmarkLibrary.category.caseCount) {
  errors.push("品牌基准 category.caseCount 与 cases 数量不一致");
}

const ids = new Set();
for (const item of [...caseLibrary.cases, ...brandBenchmarkLibrary.cases]) {
  for (const field of requiredCaseFields) {
    if (!(field in item)) errors.push(`${item.id ?? "unknown"} 缺少字段 ${field}`);
  }
  if (ids.has(item.id)) errors.push(`案例 ID 重复：${item.id}`);
  ids.add(item.id);
  try {
    const assetPath = resolve(root, item.asset);
    await access(assetPath);
    const actualSha256 = createHash("sha256").update(await readFile(assetPath)).digest("hex");
    if (actualSha256 !== item.assetMeta?.sha256) errors.push(`${item.id} 图片哈希与 assetMeta.sha256 不一致`);
  } catch {
    errors.push(`${item.id} 图片不存在：${item.asset}`);
  }
  for (const [zoneName, box] of Object.entries(item.layoutZones ?? {})) {
    if (!Array.isArray(box) || box.length !== 4 || box.some((n) => typeof n !== "number" || n < 0 || n > 1)) {
      errors.push(`${item.id}.${zoneName} 不是合法的 [x,y,w,h] 归一化框`);
    }
  }
}

for (const item of brandBenchmarkLibrary.cases) {
  for (const field of ["brandShown", "brandRecognition", "officialStatus", "authenticityNote", "brandCategory", "nonReusableIdentityAssets", "tags"]) {
    if (!(field in item)) errors.push(`${item.id} 品牌基准缺少字段 ${field}`);
  }
  if (item.officialStatus !== "unverified") errors.push(`${item.id} officialStatus 必须为 unverified`);
  if (item.rights?.status !== "reference-only" || item.rights?.commercialReuseVerified !== false) {
    errors.push(`${item.id} 品牌案例必须保持 reference-only 且 commercialReuseVerified=false`);
  }
  if (!Array.isArray(item.nonReusableIdentityAssets) || item.nonReusableIdentityAssets.length === 0) {
    errors.push(`${item.id} 必须列出不可复用的品牌身份资产`);
  }
}

const campaignIds = new Set(brandBenchmarkLibrary.campaignSeries.map((series) => series.id));
for (const item of brandBenchmarkLibrary.cases) {
  if (item.campaignSeriesId && !campaignIds.has(item.campaignSeriesId)) {
    errors.push(`${item.id} 引用了不存在的 Campaign：${item.campaignSeriesId}`);
  }
}
for (const series of brandBenchmarkLibrary.campaignSeries) {
  for (const caseId of series.caseIds) {
    if (!ids.has(caseId)) errors.push(`${series.id} 引用了不存在的案例：${caseId}`);
  }
}

const routedIds = new Set(styleLibrary.templates.flatMap((template) => template.caseIds ?? []));
for (const id of ids) {
  if (!routedIds.has(id)) errors.push(`案例 ${id} 未被任何模板路由`);
}

if (caseLibrary.cases.length !== 6 || brandBenchmarkLibrary.cases.length !== 20 || ids.size !== 26) {
  errors.push("案例总数必须为 26（6 个通用案例＋20 个品牌基准）");
}

const guardrails = styleLibrary.brandGuardrails;
if (guardrails.brandName !== "铁毅祥河洛面") errors.push("品牌标准名不正确");
if (guardrails.categoryName !== "河南郏县河洛面") errors.push("品类标准描述不正确");

for (const required of [
  "铁毅祥河洛面",
  "河南郏县河洛面",
  "收银员",
  "服务员",
  "厨房杂工",
  "工资面议",
  "15093777772",
  "18317666660"
]) {
  if (!templateText.includes(required)) errors.push(`模板缺少锁定文案：${required}`);
}

if (errors.length) {
  console.error("Validation failed:\n- " + errors.join("\n- "));
  process.exit(1);
}

console.log(`Validation passed: ${ids.size} recruitment cases (${caseLibrary.cases.length} generic + ${brandBenchmarkLibrary.cases.length} brand benchmarks).`);
