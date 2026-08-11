# Contributing

新增招聘案例时，请完成以下步骤：

1. 将图片放入 `assets/recruitment/`，文件名使用 `case-rNNN-description.ext`。
2. 在 `data/recruitment-cases.json` 添加结构化案例。
3. 记录来源、原链接、作者与许可；无法核验时标记为 `reference-only`。
4. 提炼结构关系，不把“红色、好看、高级”等空泛词当成设计机制。
5. 为案例填写 `designEngine`、`layoutZones`、`reusableElements`、`whyItWorks` 与 `riskNotes`。
6. 更新 `caseCount`、README 画廊和分类文档。
7. 运行 `npm run validate`。

新增品牌案例时，还必须：

1. 写入 `brandShown`，只转录画面可见文字，不凭印象扩写公司名。
2. 在没有原始发布页证据时，将 `officialStatus` 设为 `unverified`。
3. 列出 `nonReusableIdentityAssets`，至少包含 Logo/商标及画面中的专属视觉资产。
4. 品牌案例写入 `data/brand-recruitment-cases.json`，不要与通用案例混为一组。

涉及铁毅祥时，品牌标准名必须为“铁毅祥河洛面”，品类描述必须为“河南郏县河洛面”。

新增多菜品/招牌菜案例时：

1. 图片放入 `assets/multi-dish-signature/`，文件名使用 `case-dNNN-description.ext`。
2. 在 `data/multi-dish-signature-cases.json` 添加结构化记录，ID 使用 `DNNN`。
3. 必须填写 `dishCountShown`、`dishHierarchy`、`foodImageTreatment`、`merchandisingRole` 和 `screenshotTreatment`。
4. 平台 UI、黑边、水印、二维码和作品集标识不得写入 `reusableElements`。
5. 接触食材、产地、健康、价格与套餐数量时，只记录画面事实，不推断未给出的经营信息。
6. 更新 `docs/multi-dish-signature.md`、README 和样式路由后运行 `npm run validate`。
