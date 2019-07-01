Vue.component('product',
{
    template:`
    <div class="product">
        <div class="product-image">
            <img :src="image" :alt="altText"/>
        </div>
           <div class="product-info">
            <h1>{{title}}</h1>
            <p>{{description}}</p>
            <p v-if="onSale">Item On Sale!!!! Grab Fast!!!</p>
            <p v-else>Regular Sale</p>
            <p v-if="inStock">In Stock</p>
            <p v-else :class ="{outOfStock : !inStock}">Out of Stock</p>
            <a :href="link" target="_blank">View More</a>
            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>
            <label for="">Size</label>             <select >
                <option v-for="size in sizes">
                       {{size}}
                </option>
            </select>
                
            <div class="color-box"
            v-for="(variant, index) in variants" 
            :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
            >
       </div> 
            <div class="cart">
                <p>Cart({{cart}})</p>
            </div>
            <button v-on:click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton:!inStock}">Add to Cart</button>
            <button @click="RemoveCart">Remove From Cart</button>
            </div>            
       </div>
   
    `,
    data(){
   return {
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
   
    }
},
methods:
{
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

var app=new Vue({
        el:'#app'
})