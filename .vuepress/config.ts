import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import recoTheme from 'vuepress-theme-reco';

export default defineUserConfig({
	title: 'Lordaeron 注册入坑教程',
	description: '- 部落工会CN  Reunion',
	base: '/',
	theme: recoTheme({
		type: 'blog',
		editLink: false,
		catalogTitle: '本页目录',
		style: '@vuepress-reco/style-default',
		logo: '/logo-03.png',
		author: '七枷社',
		docsRepo: 'https://github.com/Blzaer/cn_reunion.git',
		docsBranch: 'master',
		docsDir: '/',
		lastUpdated: false,
		// series 为原 sidebar
		series: {
			'/docs/cn/': [
				{
					text: '开始',
					children: ['introduction', 'quick-start', 'vpn-mail', 'register', 'login', 'join-guild', 'acc', 'issues', 'questions']
				},
				{
					text: '进阶',
					children: ['system']
				}
			]
		},
		navbar: [
			{ text: '首页', link: '/' },
			// { text: '插件下载', link: '/blogs/addons/basic' },
			{ text: '宏分享', link: '/categories/tongyong/1/' }
			// { text: '攻略', link: '/blogs/strategy/' }
		],
		bulletin: {
			body: [
				{ type: 'title', content: 'QQ 群' },
				{
					type: 'text',
					content: `
          <ul>
            <li><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=15tDwuuVHa4jEROvC41JC0kMK5SzTN-t&jump_from=webapi&authKey=iq9iEIiDtDZTk3IefMyDiIKPwXUI4ZLMaZ4nKCDx2/VfR91FOPzu78o8BEg4J4ko">1群：980840574</a></li>
            <li><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=ZJfXnmzrp4pAmXUNrbxQso7kMWkwIgkZ&jump_from=webapi&authKey=1PAdy/xuXsuGrVGv/pwC8ade6DqNY2fzph12o9G4LcQAcilyPL0TAzNalkDoq0qU">2群：587241022（暂关）</a></li>
            <li><a target="_blank" href="https://qm.qq.com/cgi-bin/qm/qr?k=7btUG67-08b7Mmid1DZqDARAuMEKavK-&jump_from=webapi&authKey=JqL8llwS/tubIeeCFTQWYw5dYSdzrpsQo/L+kZfwHk3sIdhcdLHJsoQ5GatWcktq">3群：714560042</a></li>
          </ul>`,
					style: 'font-size: 12px;'
				},
				{ type: 'hr' },
				{ type: 'title', content: '微 信' },
				{
					type: 'text',
					content: `<image src="/assets/wx.jpg"></image>`,
					style: 'font-size: 12px;'
				}
			]
		},
		commentConfig: {
			type: 'valine',
			options: {
				appId: '9gabAILKOTdmnuxMCSdO4xwu-9Nh9j0Va', // your appId
				appKey: '69DFWw5R5IyIgIoCA8GBGzZI', // your appKey
				hideComments: false // 全局隐藏评论，默认 false
			}
		}
		// valineConfig 配置与 1.x 一致
		// valineConfig: {
		//   appId: 'xxx',
		//   appKey: 'xxx',
		//   placeholder: '填写邮箱可以收到回复提醒哦！',
		//   verify: true, // 验证码服务
		//   // notify: true,
		//   recordIP: true,
		//   // hideComments: true // 隐藏评论
		// },
	})
	// debug: true,
});
