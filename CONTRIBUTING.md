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
