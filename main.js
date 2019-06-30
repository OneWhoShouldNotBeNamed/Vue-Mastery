

var app=new Vue({
el:'#app',
data:{
    product:"Socks",
    brand:"Vue Mastery",
    description:"A pair of warm, fuzzy socks.",
    //image:"./vmSocks-green-onWhite.jpg",
    altText:"A pair of Socks",
    link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
    onSale:true,    
    details:["80% Cotton","20% polyster","Gender-neutral"],
    sizes:["5","6","7"],
    cart:0,
    selectedVariant:0,
    variants:
    [
        {
            variantId:2234,
            variantColor:"green",
            variantImage:"./vmSocks-green-onWhite.jpg",
            variantQuantity:10
        },
        {
            variantId:2235,
            variantColor:"blue",
            variantImage:"./vmSocks-blue.jpg",
            variantQuantity:0
        }
    ]
   
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        RemoveCart(){
            this.cart-=1
        },
        updateProduct(index)
        {
            this.selectedVariant=index
          //  console.log(index)
        }
},
computed:
{
    title()
    {
        return this.brand+' '+this.product
    },
    image()
    {
        return this.variants[this.selectedVariant].variantImage
    },
    inStock()
    {
        return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
        if (this.onSale) {
          return this.brand + ' ' + this.product + ' are on sale!'
        } 
          return  this.brand + ' ' + this.product + ' are not on sale'
      }
}
})