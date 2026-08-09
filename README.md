# Restaurant Poster Reference Library

面向中国餐饮门店的实战海报参考库。当前首个分类为 **招聘海报 / Recruitment & Hiring**，共收录 26 张用户提供案例：6 张通用国内实战案例与 20 张品牌招聘基准案例。不以模型臆造的“风格词”替代案例证据。

仓库结构参考 [awesome-gpt-image-2](https://github.com/freestylefly/awesome-gpt-image-2) 的“案例 → 分类 → 模板 → 结构化数据”组织方式，但字段、分析与模板均为本仓库重新设计。

## 分类导航

| 分类 | 案例数 | 数据 | 文档 | 模板 |
|---|---:|---|---|---|
| 通用招聘案例 | 6 | [`data/recruitment-cases.json`](data/recruitment-cases.json) | [`docs/recruitment.md`](docs/recruitment.md) | [`docs/templates.md`](docs/templates.md) |
| 品牌招聘基准 | 20 | [`data/brand-recruitment-cases.json`](data/brand-recruitment-cases.json) | [`docs/brand-benchmarks.md`](docs/brand-benchmarks.md) | [`docs/templates.md`](docs/templates.md) |

## 招聘案例画廊

| ID | 预览 | 类型 | 核心设计机制 |
|---|---|---|---|
| R001 | ![R001](assets/recruitment/case-r001-a-frame-sign.jpg) | 商场 A 型水牌 | 单字“聘”建立远距识别，岗位薪资居中排列 |
| R002 | ![R002](assets/recruitment/case-r002-kraft-editorial.jpg) | 牛皮纸编辑海报 | 粗黑招聘字、纸张肌理、框线信息区 |
| R003 | ![R003](assets/recruitment/case-r003-red-calligraphy.jpg) | 红色传统餐饮海报 | 巨型书写字、岗位薪资、福利与资格分区 |
| R004 | ![R004](assets/recruitment/case-r004-scene-photo.jpg) | 场景摄影招聘海报 | 行业环境图、前厅后厨双栏、醒目招聘字 |
| R005 | ![R005](assets/recruitment/case-r005-red-gold-list.jpg) | 连锁餐饮信息表 | 红金主色、岗位薪资表、要求与联系方式 |
| R006 | ![R006](assets/recruitment/case-r006-series-grid.png) | 系列化招聘模板 | 同一视觉系统下的多版式适配 |

## 品牌基准精选

完整的 20 案例索引与权利边界见 [`docs/brand-benchmarks.md`](docs/brand-benchmarks.md)。下列预览只用于说明数据库覆盖的设计机制。

| ID | 预览 | 基准方向 | 核心设计机制 |
|---|---|---|---|
| R007 | ![R007](assets/recruitment/brand-benchmarks/case-r007-mcdonalds-green-campaign.jpg) | 品牌 Campaign | 品牌符号作骨架，门店插画＋撕纸信息区 |
| R012 | ![R012](assets/recruitment/brand-benchmarks/case-r012-chagee-red-cultural.jpg) | 门店玻璃海报 | 红色文化图像＋纵向岗位信息 |
| R018 | ![R018](assets/recruitment/brand-benchmarks/case-r018-heytea-hq-modular.jpg) | 总部招聘 | 三张编号卡分别回答人群、岗位、福利 |
| R020 | ![R020](assets/recruitment/brand-benchmarks/case-r020-lou-shi-ming-info-rail.jpg) | 传统餐饮 | 左信息轨＋右巨型书写招聘字 |
| R022 | ![R022](assets/recruitment/brand-benchmarks/case-r022-xijiade-physical-sign.jpg) | 门店招聘牌 | 红米色物理框＋岗位分组表 |
| R026 | ![R026](assets/recruitment/brand-benchmarks/case-r026-kfc-service-module.jpg) | 高识别门店版 | 超大标题＋单一红色信息模块 |

## 铁毅祥品牌文字锁定

- 品牌标准名：**铁毅祥河洛面**
- 品类标准描述：**河南郏县河洛面**
- 招聘岗位：**收银员、服务员、厨房杂工**
- 薪资写法：**工资面议**
- 联系电话：**15093777772、18317666660**

品牌名称必须逐字使用“铁毅祥河洛面”，不接受任何近形字、繁体字或相似面食品类名称替代。

## 使用方法

1. 先在 26 个招聘案例中选择一个主参考，不要把多种风格全部混合。
2. 读取该案例的 `designEngine`、`layoutZones` 和 `reusableElements`。
3. 若选择品牌基准案例，先读取 `nonReusableIdentityAssets`，明确禁止复用的 Logo、商标和专属插画。
4. 将业务变量填入 [`docs/templates.md`](docs/templates.md) 的招聘模板。
5. 运行 `npm run validate` 检查图片路径、必要字段、品牌基准状态和铁毅祥品牌文字。

## 权利说明

仓库内图片是用户提供的实战参考截图，来源与商业授权状态尚未核验。品牌案例出现商标也不代表已确认由品牌官方发布。图片仅标记为 `reference-only`，不得据此推定可公开再分发或直接商用。公开发布到 GitHub 前，应补充原作者、原链接和许可信息，或将原图替换为已获授权的缩略图。
