var App = new Vue({
	el: "#comment_app",
	data: {
		input: "",
		reply: "",
		total_comments: 0,
		comments: [],
	},
	methods: {
		getReplySingleton: function (reply) {
			return function () {
				return {
					reply
				};
			}
		},
		getSingleTon: function (comment) {
			return function () {
				return {
					comment,total_likes: 0,replies: []
				}
			}
		},
		submit() {
			var comment = this.getSingleTon(this.input);
			var old = this.comments;
			var newc = [...old,comment()];
			this.comments = newc;
			this.input = "";
			this.total_comments  = this.comments.length;
		},
		like(index) {
			this.comments[index].total_likes = this.comments[index].total_likes + 1;
		},
		addReply(index) {
			var s = this.getReplySingleton(this.reply);
			var replies = this.comments[index].replies;
			var n = [...replies,s()];
			this.comments[index].replies = n;
			this.reply = "";
		}
	}
});