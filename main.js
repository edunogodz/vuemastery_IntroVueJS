var app = new Vue({
	el: '#app',
	data: {
		product: 'Socks',		
		inStock: true,
		image: './assets/vmSocks-green.jpg'	
		,details: ["80% Cotton","20% polyester","Gender-neutral"]
		,variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: './assets/vmSocks-green.jpg'
			},
			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: './assets/vmSocks-blue.jpg'
			}
		]
		,cart: 0	
	},
	methods: {
		addToCart() {
			this.cart += 1
		},
		updateProduct(variantImage) {
			this.image = variantImage
		},
		removeToCart() {
			this.cart -= 1
		}
	}
})