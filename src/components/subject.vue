<template>
	<div class="subject">
		<mu-card class="card">
				<mu-card-title :title="$store.state.ability.name"/>
					<mu-card-text v-for="item in $store.state.ability.skill">
						{{item.sk}}
					</mu-card-text>
		</mu-card>
		<mu-card class="card">
			<mu-card-title :title="$store.state.practice.name" />
			<mu-card-text v-for="item in $store.state.practice.company">
				<!-- <span class="company-name"></span> -->
			 	<p><span class="company-name">{{item.name}}</span><span class="time">{{item.time}}</span></p>
				<p>{{item.text}}</p>
			</mu-card-text>
		</mu-card>
		<mu-card class="card">
				<mu-card-title :title="$store.state.project.name"/>
				<mu-card-text v-for="item in $store.state.project.project">
					<a :href="item.url">{{item.list}}</a>	
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
	.yesr, .company-name{
		margin-right: 5em;
	}
	.mu-card-title-container {
		padding: 10px 16px;
	}
	.mu-card-text {
		padding: 10px 16px;
	}
	.card:nth-child(3) .mu-card-text:hover {
		background-color: rgba(71,74,73,0.1);
	}
	a {
		color: #474a4f;
	}
</style>