import EmberRouter from "@ember/routing/router"
import config from "./config/environment"

const Router = EmberRouter.extend({
	location: config.locationType,
	rootURL: config.rootURL
})

Router.map(function() {
	this.route("create")
	this.route("profile", {path: "/user/:id"})
	this.route("about")
	this.route("edit", { path: ":id/edit" })
	this.route("error")
})

export default Router
