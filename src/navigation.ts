import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '产品中心',
      links: [
        {
          text: '水龙头系列',
          href: getPermalink('/services'),
        },
        {
          text: '卫浴挂件',
          href: getPermalink('/services'),
        },
        {
          text: '花洒与淋浴管',
          href: getPermalink('/services'),
        },
        {
          text: '水暖管件 · 地漏',
          href: getPermalink('/services'),
        },
      ],
    },
    {
      text: '合作方案',
      href: getPermalink('/pricing'),
    },
    {
      text: '关于我们',
      href: getPermalink('/about'),
    },
    {
      text: '新闻资讯',
      href: getBlogPermalink(),
    },
    {
      text: '联系我们',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: '获取报价', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: '产品中心',
      links: [
        { text: '水龙头系列', href: getPermalink('/services') },
        { text: '卫浴挂件', href: getPermalink('/services') },
        { text: '花洒与淋浴管', href: getPermalink('/services') },
        { text: '水暖管件', href: getPermalink('/services') },
        { text: '地漏系列', href: getPermalink('/services') },
        { text: '不锈钢厨具', href: getPermalink('/services') },
      ],
    },
    {
      title: '服务支持',
      links: [
        { text: '工程合作', href: getPermalink('/pricing') },
        { text: '招商加盟', href: getPermalink('/pricing') },
        { text: '出口 OEM/ODM', href: getPermalink('/contact') },
        { text: '常见问题', href: getPermalink('/#features') },
      ],
    },
    {
      title: '走进钦丰',
      links: [
        { text: '品牌介绍', href: getPermalink('/about') },
        { text: '新闻中心', href: getBlogPermalink() },
        { text: '联系我们', href: getPermalink('/contact') },
      ],
    },
    {
      title: '法律信息',
      links: [
        { text: '使用条款', href: getPermalink('/terms') },
        { text: '隐私政策', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '使用条款', href: getPermalink('/terms') },
    { text: '隐私政策', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: '微信', icon: 'tabler:brand-wechat', href: '#' },
    { ariaLabel: '微博', icon: 'tabler:brand-weibo', href: '#' },
    { ariaLabel: '哔哩哔哩', icon: 'tabler:brand-bilibili', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    余姚市钦丰金属压铸有限公司 · 钦丰卫浴 · 让每一滴水都值得善待
  `,
};
