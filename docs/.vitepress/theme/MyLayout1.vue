<!--.vitepress/theme/MyLayout.vue-->
<template>
	<Layout>
		<template #doc-after>
			<div class="comment-container"></div>
		</template>
	</Layout>
</template>

<script setup>
	import {
		onMounted,
		watch
	} from 'vue';
	import md5 from 'md5'
	import 'gitalk/dist/gitalk.css';
	import Gitalk from 'gitalk';
	import DefaultTheme from 'vitepress/theme';
	import {
		useRoute
	} from 'vitepress';

	const {
		Layout
	} = DefaultTheme;

	const route = useRoute();

	const emptyNode = (node) => {
		//循环删除子元素，一直删除第一个子元素直到没有子元素即为清空
		while (node.hasChildNodes()) {
			node.removeChild(node.firstChild);
		}
	};

	const initGitalk = () => {
		if (typeof window !== undefined) {
			const s_div = document.createElement('div'); // 创建节点
			s_div.setAttribute('id', 'gitalk-page-container'); // 设置id
			const container = document.querySelector('.comment-container'); // querySelector的节点可自己根据自己想加载的地方设置
			if (container) {
				emptyNode(container);
				container.appendChild(s_div);
				const gitment = new Gitalk({
					// id: { name: `${location.pathname.replace(/\W/g, '')}` }, // 可选。默认为 location.href
					// owner: '*****', // GitHub repository 所有者
					// repo: '**********', // GitHub repository
					// clientID: '*************', // 自己的clientID
					// clientSecret: '*************', // 自己的clientSecret
					// admin: ['lesonky'], // GitHub repository 所有者
					// labels: [{ name: 'Gitalk' }], // GitHub issue 的标签
					// createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
					// // proxy: "https://vercel.younglina.top/github_access_token",
					id: md5(location.pathname), // 可选。默认为 location.href
					owner: 'zhengxiaojun', // GitHub repository 所有者
					repo: 'blog', // GitHub repository
					clientID: '8d75bd3d346537698e1e', // 自己的clientID
					clientSecret: 'ab6651df300fb17af64bb5bb18fbef4baf6d1a31', // 自己的clientSecret
					admin: ['zhengxiaojun'], // GitHub repository 所有者
					labels: [{
						name: 'Gitalk'
					}], // GitHub issue 的标签
					createIssueManually: true,
					title: '博客',
					distractionFreeMode: false,
				});
				gitment.render('gitalk-page-container');
			}
		}
	};
	onMounted(initGitalk);

	watch(
		() => route.path,
		() => {
			initGitalk();
		}
	);
</script>
<style>
	.gt-container .gt-header-textarea {
		color: #000;
	}
</style>