import { Factory, faker } from "ember-cli-mirage"

export default Factory.extend({
	id(i){
		return i+1
	},
	name(){
		return faker.name.firstName() + " " + faker.name.lastName()
	},
	location(){
		return faker.address.state() +", USA"
	},
	genre1(){
		return faker.random.arrayElement(["pop", "rap", "hip-hop", "vaporwave","latin", "edm", "country","rock", "indie","r&b","classical","yacht rock"])
	},
	genre2(){
		return faker.random.arrayElement(["pop", "rap", "hip-hop", "vaporwave","latin", "edm", "country","rock", "indie","r&b","classical","yacht rock"])
	},
	genre3(){
		return faker.random.arrayElement(["pop", "rap", "hip-hop", "vaporwave","latin", "edm", "country","rock", "indie","r&b","classical","yacht rock"])
	}
       
})
