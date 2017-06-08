import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import actions from "./actions"

Vue.use(Vuex);

const state = {
	"person": {
		"name": "张泽互",
		"phone": "手机：15220036344",
		"email": "邮箱：845517336@qq.com",
		"profession": "专业：计算机多媒体技术",
		"school": "学历：大学专科",
		"github": "github(点击访问)",
		"url": "https://github.com/CheungZehu"
	},
	"ability": {
		"name": "掌握技能",
		"skill": [
			{
				"sk": "精通HTML5/CSS/JavaScript等前端技术，能快速精确还原设计稿，并且有Node.js和PHP等后台基础；；"
			},
			{
				"sk": "熟练使用jQuery/Bootstrap等流行的类库，熟练使用前端MVC框架技术，如Vue.js；"
			},
			{
				"sk": "理解并掌握核心技术DOM、BOM、Ajax、JSON等，熟悉页面架构和布局（栅格和响应式）；"
			},
			{
				"sk": "对Web语义化有深刻理解，理解各主流浏览器间的兼容性问题，有强烈的前端性能优化意识；"
			},
			
			{
				"sk": "熟练应用Photoshop/Adobe Illustrator等相关设计工具软件。"
			}
		]
	},
	"practice": {
		"name": "实习经历",
		"company": [
			{
				"name": "上海游唉唉网络科技有限公司广州分公司",
				"time": "2017.04.18 — 2017.05.31",
				"text": "岗位是web前端开发实习，主要参与公司前端项目开发，快速还原设计稿，编写网页视图层；协助后端工程师进行网页的视图层与后台数据对接，同时对页面样式上出现的bug进行解决。"
			}
		]
	},
	"education": {
		"name": "教育经历",
		"school": [
			{
				"year": "2014/9 — 2017/7 ",
				"school": "广东轻工职业技术学院信息技术学院 计算机多媒体专业"
			}
			// {
			// 	"year": "2011/9 — 2014/7 ",
			// 	"school": "深圳市第二职业技术学校信息技术部 动漫与游戏制作专业"
			// }
		]
	},
	"project": {
		"name": "项目经验",
		"project": [
			{
				"list": "iiugameH5游戏平台（HTML5+CSS3+jQuery+ThinkPHP）",
				"url": "http://h5.iiugame.com"
			},
			{
				"list": "iiugame游戏官网（HTML5+CSS3+jQuery+ThinkPHP）",
				"url": "http://iiugame.com"
			},
			{
				"list": "毕业设计—响应式电子商务网站（jQuery + PHP）",
				"url": "javascript:;"
			},
			{
				"list": "Vdo，仿豆瓣电影APP（vue + Muse-ui）",
				"url": "https://github.com/CheungZehu/Vdo"
			},
			{
				"list": "Vue版个人简历（vue）",
				"url": "https://cheungzehu.github.io/Cheung-resume/"
			},
			{
				"list": "网页版俄罗斯方块小游戏（javascript）",
				"url": "https://cheungzehu.github.io/tetris/"
			},
			{
				"list": "网页版2048小游戏（javascript）",
				"url": "https://cheungzehu.github.io/2048/"
			}
		]
	},
	"evaluation": {
		"name": "自我评价",
		"project": [
			{
				"list": "具备良好的学习能力，能快速学习各种前端技术。同时具备良好的分析及解决问题的能力；"
			},
			{
				"list": "在校期间，成绩优秀，曾获得校内三等奖学金，加入过校学生会，担任校学生会宣传部副部长，具有一定的管理能力；"
			},
			{
				"list": "个性开朗，容易相处，团队荣誉感强。"
			}
		]
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})