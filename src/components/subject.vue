<template>
	<div class="subject">
		<mu-card class="card">
				<mu-card-title :title="$store.state.ability.name"/>
					<mu-card-text v-for="item in $store.state.ability.skill">
						{{item.sk}}
					</mu-card-text>
		</mu-card>
		<mu-card class="card">
				<mu-card-title :title="$store.state.project.name"/>
				<mu-card-text v-for="item in $store.state.project.project">
					{{item.list}}
				</mu-card-text>
		</mu-card>
		<mu-card class="card">
				<mu-card-title :title="$store.state.education.name"/>
				<mu-card-text v-for="item in $store.state.education.school">
					<span class="yesr">{{item.year}}</span>{{item.school}}
				</mu-card-text>
		</mu-card>
		<mu-card class="card">
				<mu-card-title :title="$store.state.evaluation.name"/>
				<mu-card-text v-for="item in $store.state.evaluation.project">
					{{item.list}}
				</mu-card-text>
		</mu-card>
	</div>
</template>

<style type="text/css" scoped>
	.subject{
		color: #999;
		text-align: left;
		transition: .5s;
	}
	.card{
		padding: 1em;
		margin-bottom: 1.5em;
	}
	.yesr{
		margin-right: 5em;
	}
</style>