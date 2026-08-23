# 备份说明（BACKUP.md）

本仓库是「钦丰卫浴」官网项目的**源码备份**，基于开源模板 [AstroWind](https://github.com/arthelokyo/astrowind)（MIT 协议）二次开发。

## 备份范围

- ✅ 全部源码文本（`src/`、配置文件、`vendor/`、`public/` 等）
- ❌ 未包含：`node_modules/`（`npm install` 还原）、`dist/`（`npm run build` 重新生成）、二进制图片（见下方清单）

## 图片素材还原

图片均来自 [Unsplash](https://unsplash.com)（可免费商用）。因接口限制，二进制图片未推送到本仓库，原始文件保留在本地项目 `src/assets/images/`。如需从网络重新下载，可用以下地址（`https://images.unsplash.com/photo-{ID}?w=1600&q=80&fm=jpg&fit=crop`）：

| 文件 | Unsplash ID |
|---|---|
| faucet.jpg | 1584622650111-993a426fbf0a |
| bathroom-vanity.jpg | 1620626011761-996317b8d101 |
| hotel-bath.jpg | 1590490360182-c33d57733427 |
| factory.jpg | 1504328345606-18bbc8c9d7d1 |
| case-hotel.jpg | 1611892440504-42a792e24d32 |
| showroom.jpg | 1552321554-5fefe8c9ef14 |
| interior-1.jpg | 1631889993959-41b4e9c6e3c5 |
| interior-2.jpg | 1604709177225-055f99402ea3 |
| hero-bathroom.jpg / smart-toilet.jpg / bathtub.jpg / detail-craft.jpg / shower.jpg / case-apartment.jpg | Unsplash，ID 未记录（原图在本地） |
| favicons / default.png / hero-image.png / app-store.png / google-play.png | AstroWind 模板自带资源，从模板仓库还原 |

## 本地运行

```bash
npm install
npm run dev   # 开发预览
npm run build # 构建静态站点到 dist/
```

## 定制内容概要

- 品牌：钦丰卫浴（余姚市钦丰金属压铸有限公司，始建于 1996 年）
- 产品线：水龙头 / 卫浴挂件 / 花洒淋浴管 / 编织管·水暖管件 / 地漏 / 不锈钢厨具
- 联系信息：浙江省余姚市陆埠镇五马工业功能区创新西路 1 号 · 0574-62386081 / 0574-62386085 · sales@china-qinfeng.com
- 全站中文，含 4 篇中文博客文章
