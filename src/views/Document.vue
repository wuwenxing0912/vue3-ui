<template>
	<div class="document">
		<TopNav />
		<div class="content">
			<aside>
				<h2>组件</h2>
				<ol>
					<li>
						<router-link to="/document/switch">Switch 开关</router-link>
					</li>
					<li>
						<router-link to="/document/button">Button 按钮</router-link>
					</li>
					<li>
						<router-link to="/document/dialog">Dialog 对话框</router-link>
					</li>
					<li>
						<router-link to="/document/tabs">Tabs 标签页</router-link>
					</li>
				</ol>
			</aside>
			<main><router-view></router-view></main>
		</div>
	</div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
	components: {
		TopNav,
	},
};
</script>

<style lang="scss" scoped>
$main-color: #42b983;
.document {
	min-height: 100vh;
	> .content {
		display: flex;
		aside {
			// width: 150px;
			// padding: 16px;
			// > h2 {
			// 	margin-bottom: 4px;
			// }
			// > ol {
			// 	> li {
			// 		padding: 4px 0;
			// 		margin-left: 8px;
			// 	}
			// }
			// @media (max-width: 500px) {
			// 	position: fixed;
			// 	top: 0;
			// 	left: 0;
			// 	padding-top: 80px;
			// }
			border-right: 1px solid #eeeeee;
			margin-right: 32px;

			> h2 {
				font-size: 20px;
				padding: 48px 16px 6px 30px;
			}
			> ol {
				min-width: 12em;
				margin-left: 12px;
				> li > a {
					font-size: 15px;
					height: 40px;
					padding: 4px 16px 4px 30px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					color: rgba(0, 0, 0, 0.75);

					&:hover {
						color: $main-color;
					}
					&.router-link-active {
						color: $main-color;
						border-right: 1px solid $main-color;
						background: rgba($main-color, 0.15);
					}
				}
			}
		}
		main {
			flex-grow: 1;
			padding: 16px;
			font-size: 16px;

			> section {
				max-width: 1000px;
				padding: 20px;
				margin: 0px auto;
				> h1 {
					margin-bottom: 20px;
				}
				& .example-container {
					margin: 0 auto;
					border: 1px solid rgba(0, 0, 0, 0.15);
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
					padding: 40px;
					display: flex;
					justify-content: flex-start;
					align-items: center;
					& .x-scroll-inner {
						& p {
							padding: 5px 10px;
							margin: 10px;
							color: rgba(0, 0, 0, 0.65);
							border: 1px solid rgba(0, 0, 0, 0.05);
						}
					}
				}
				& .example-container-fix {
					margin: 0 auto;
					border: 1px solid rgba(0, 0, 0, 0.15);
					border-top-left-radius: 4px;
					border-top-right-radius: 4px;
					padding: 40px;
				}
				& .description {
					display: flex;
					justify-content: space-between;
					align-items: center;
					top: -1px;
					position: relative;
					border: 1px solid rgba(0, 0, 0, 0.15);
					border-top: none;
					border-bottom-left-radius: 4px;
					border-bottom-right-radius: 4px;
					padding: 20px 40px;
					font-size: 14px;
					color: rgba(0, 0, 0, 0.65);

					& .pop-content {
						display: inline-block;
						position: absolute;
						right: 0;
						top: -30%;
						padding: 6px;
						transform: translateX(-25%);
						background: #000000bf;
						color: #fff;
						border-radius: 2px;
					}

					& .pop-content::after {
						content: "";
						display: inline-block;
						border: 6px solid #000000bf;
						position: absolute;
						right: 50%;
						transform: translateX(50%);
						top: 100%;
						border-bottom-color: transparent;
						border-left-color: transparent;
						border-right-color: transparent;
					}
				}

				& .code-area {
					pre {
						padding: 20px 0;
					}
					pre div {
						padding: 6px 40px;
						font-family: "Courier New", ui-monospace, -webkit-pictograph;
					}
				}

				& .api-table {
					border: 1px solid #f0f0f0;
					font-size: 14px;
					color: rgba(0, 0, 0, 0.65);
					width: 100%;
					margin: 0 auto;
					border-collapse: collapse;
					text-align: left;
					vertical-align: middle;
					& th:first-child,
					& td:first-child {
						border-left: 1px solid #f0f0f0;
					}
					& tr {
						border-top: 1px solid #f0f0f0;
						border-bottom: 1px solid #f0f0f0;
					}
					& th,
					& td {
						font-weight: normal;
						padding: 16px;
					}
					> thead {
						color: rgba(0, 0, 0, 0.65);
						background-color: rgba(0, 0, 0, 0.04);
					}
					& tbody tr:hover {
						background-color: rgba(0, 0, 0, 0.02);
					}
					& .api-type {
						color: #c41d7f;
					}
				}
			}
		}
	}
}
</style>
