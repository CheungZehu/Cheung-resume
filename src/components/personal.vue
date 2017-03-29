<template>
	<mu-card class="info">
		<mu-list>
			<!-- <mu-avatar src="./../../static/C.jpg" :size="100" /> -->
			<img class="avatar" src="./../../static/C.jpg">
			<p>{{$store.state.person.name}}</p>
		</mu-list>
		<mu-paper circle />
		<mu-paper class="bg">
			<mu-list-item :title="$store.state.person.phone">
                <mu-icon slot="left" value="call"/>
            </mu-list-item>
		</mu-paper>
		<mu-paper class="bg">
			<mu-list-item :title="$store.state.person.email">
				<mu-icon slot="left" value="email" />
			</mu-list-item>
		</mu-paper>
		<mu-paper class="bg">
			<mu-list-item :title="$store.state.person.profession">
				<mu-icon slot="left" value="work" />
			</mu-list-item>
		</mu-paper>
		<mu-paper class="bg">
			<mu-list-item :title="$store.state.person.school">
				<mu-icon slot="left" value="school" />
			</mu-list-item>
		</mu-paper>
		<mu-paper class="bg">
			<mu-list-item :title="$store.state.person.github" :href="$store.state.person.url" target="_blank">
				<mu-icon slot="left" value="link" />
			</mu-list-item>
		</mu-paper>
	</mu-card>
</template>

<style type="text/css" scoped>
	.info{
		font-size: 24px;
		color: #fff;
		background-color: #424242;
		transition: .5s;
	}
	.avatar{
		margin-top: 1em;
		width: 13em;
		height: 13em;
		border-radius: 50%;
		box-shadow: 0 0 1px #fff;
	}
	.bg{
		color: #fff;
		height: 2em;
		line-height: 2em;
		text-align: left;
		margin-bottom: .5em;
	}

</style>