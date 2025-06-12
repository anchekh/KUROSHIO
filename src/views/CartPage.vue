<template>
  <div class="cart-page">
    <div class="cart-items">
      <div class="cart-items-container">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <div class="cart-item-left-part">
          <div class="cart-item-img">
            <img :src="item.image" :alt="item.title" style="width: 100px; height: 100px; object-fit: cover; border-radius: 14px;">
          </div>
        </div>
        <div class="cart-item-right-part">
          <div class="cart-item-title-and-delete">
            <div class="cart-item-title">{{ item.title }}</div>
            <div class="cart-item-delete" @click="removeFromCart(item.id)">
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
              </svg>
            </div>
          </div>
          <div class="cart-item-description">{{ item.description }}</div>
          <div class="cart-item-counter-and-sum">
            <div class="cart-item-counter">
              <button class="cart-item-counter-btn" @click="updateQuantity({ productId: item.id, newQuantity: item.quantity - 1 })">-</button>
                {{ item.quantity }}
              <button class="cart-item-counter-btn" @click="updateQuantity({ productId: item.id, newQuantity: item.quantity + 1 })">+</button>
            </div>
            <div class="cart-item-sum">{{ item.price * item.quantity }} р</div>
          </div>
        </div>
      </div>
      </div>
      <div class="cart-items-sum-container">
        <div class="sum-container-txt">Итого:</div>
        <div class="sum-container-sum">{{ cartTotal }} р</div>
      </div>
    </div>
    <div class="buyer-info">
      <div class="buyer-info-top-part">
        <p class="buyer-info-title">Данные для заказа</p>
        <div class="radio-inputs">
          <label>
            <input class="buyer-info-radio" type="radio" name="delivery" value="del" v-model="form.deliveryType" @change="v$.form.deliveryType.$touch()"></input>
            <span class="radio-txt">Доставка</span>
          </label>
          <label>
            <input class="buyer-info-radio" type="radio" name="delivery" value="self-del" v-model="form.deliveryType" @change="v$.form.deliveryType.$touch()"></input>
            <span class="radio-txt">Самовывоз</span>
          </label>
        </div>
      </div>
      <div class="buyer-info-name-and-surname">
        <input class="buyer-info-input name" placeholder="Имя" v-model="form.firstName" @blur="v$.form.firstName.$touch()" :class="{ 'invalid': v$.form.firstName.$error }"></input>
        <input class="buyer-info-input surname" placeholder="Фамилия" v-model="form.lastName" @blur="v$.form.lastName.$touch()" :class="{ 'invalid': v$.form.lastName.$error }"></input>
      </div>
      <div class="buyer-info-address-info">
        <input class="buyer-info-input street" placeholder="Улица" v-model="form.street" @blur="v$.form.street.$touch()" :class="{ 'invalid': v$.form.street.$error }"></input>
        <input class="buyer-info-input house" placeholder="Дом" v-model="form.house" @blur="v$.form.house.$touch()" :class="{ 'invalid': v$.form.house.$error }"></input>
        <input class="buyer-info-input apartment" placeholder="Квартира" v-model="form.apartment" @blur="v$.form.apartment.$touch()" :class="{ 'invalid': v$.form.apartment.$error }"></input>
        <input class="buyer-info-input entrance" placeholder="Подъезд" v-model="form.entrance" @blur="v$.form.entrance.$touch()" :class="{ 'invalid': v$.form.entrance.$error }"></input>
        <input class="buyer-info-input floor" placeholder="Этаж" v-model="form.floor" @blur="v$.form.floor.$touch()" :class="{ 'invalid': v$.form.floor.$error }"></input>
      </div>
      <div class="buyer-info-contacts">
        <input class="buyer-info-input phone" placeholder="Телефон" v-model="form.phone" @blur="v$.form.phone.$touch()" :class="{ 'invalid': v$.form.phone.$error }"></input>
        <input class="buyer-info-input email" placeholder="Почта" v-model="form.email" @blur="v$.form.email.$touch()" :class="{ 'invalid': v$.form.email.$error }"></input>
      </div>
      <textarea class="buyer-info-input comment" placeholder="Комментарий" v-model="form.comment"></textarea>
      <div class="buyer-info-promo">
        <input class="buyer-info-input promo" placeholder="Промокод" v-model="form.promo" @blur="v$.form.promo.$touch()" :class="{ 'invalid': v$.form.promo.$error }"></input>
        <button class="buyer-info-promo-btn">Применить</button>
      </div>
      <div class="order-btn-container">
        <button class="order-btn" :disabled="v$.$invalid" :class="{ 'disabled': v$.$invalid }" @click="submitOrder">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue"
import { useVuelidate } from "@vuelidate/core"
import { required, email } from "@vuelidate/validators"
import { useStore } from "vuex"
import { useRouter } from "vue-router"

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const savedForm = JSON.parse(localStorage.getItem("orderForm")) || {
      deliveryType: null,
      firstName: "",
      lastName: "",
      street: "",
      house: "",
      apartment: "",
      entrance: "",
      floor: "",
      phone: "",
      email: "",
      comment: "",
      promo: ""
    }

    const form = ref(savedForm)

    watch(form, (newValue) => {
      localStorage.setItem("orderForm", JSON.stringify(newValue))
    }, { deep: true })

    const rules = computed(() => ({
      form: {
        deliveryType: { required },
        firstName: { 
          required, 
          valid: value => /^[а-яА-ЯёЁa-zA-Z\s]+$/.test(value) 
        },
        lastName: { 
          required, 
          valid: value => /^[а-яА-ЯёЁa-zA-Z\s]+$/.test(value) 
        },
        street: { 
          required, 
          valid: value => /^[а-яА-ЯёЁa-zA-Z\s]+$/.test(value) 
        },
        house: { 
          required, 
          valid: value => /^[а-яА-ЯёЁa-zA-Z0-9\s]+$/.test(value) 
        },
        apartment: { 
          valid: value => !value || /^[0-9]+$/.test(value) 
        },
        entrance: { 
          valid: value => !value || /^[0-9]+$/.test(value) 
        },
        floor: { 
          valid: value => !value || /^[0-9]+$/.test(value) 
        },
        phone: { 
          required, 
          valid: value => /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(value) 
        },
        email: { required, email },
        promo: { 
          valid: value => !value || value === "PROMO10" 
        }
      }
    }))

    const v$ = useVuelidate(rules, { form })

    const submitOrder = async () => {
      try {
        const isValid = await v$.value.$validate()
        
        if (!isValid) return
        
        store.dispatch("clearCart")
        localStorage.removeItem("orderForm") 
        router.push({ name: "Success" })
      } catch (error) {
        console.error("Ошибка", error)
      }
    }
    
    return { 
      form, 
      v$, 
      submitOrder,
      cartItems: computed(() => store.getters.cartItems),
      cartTotal: computed(() => store.getters.cartTotal),
      removeFromCart: (productId) => store.dispatch("removeFromCart", productId),
      updateQuantity: (payload) => store.dispatch("updateQuantity", payload)
    }
  },
  methods: {
    decreaseQuantity(item) {
      if (item.quantity > 1) {
        this.updateQuantity({
          productId: item.id,
          newQuantity: item.quantity - 1
        })
      }
    },
    increaseQuantity(item) {
      this.updateQuantity({
        productId: item.id,
        newQuantity: item.quantity + 1
      })
    }
  }
}
</script>

<style>
.cart-page {
  display: flex;
}

.cart-items {
  margin-top: calc(60px + 20px);
  margin-left: calc(60px + 20px);
  width: 520px;
  height: auto;
  overflow: auto;
  /* background-color: #1E1E1E; */
}

.cart-items-container {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: white #0E0E0E;
  min-height: 440px;
  max-height: 440px;
}

.cart-item {
  width: 500px;
  height: 140px;
  background-color: #1E1E1E;
  border-radius: 14px;
  margin-bottom: 10px;
  display: flex;
}

.cart-item-left-part {
  display: flex;
  width: 140px;
  height: 140px;
  align-items: center;
  justify-content: center;
}

.cart-item-right-part {
  width: calc(500px - 140px);
  height: 140px;
  margin-top: 20px;
}

.cart-item-title-and-delete {
  display: flex;
  width: calc(500px - 140px);
}

.cart-item-title {
  font-size: 16px;
  width: calc(500px - 140px - 20px);
}

.cart-item-delete {
  margin-right: 20px;
  text-align: end;
  width: 20px;
  font-size: 16px;
  cursor: pointer;
}

.cart-item-delete:hover {
  stroke: #fff;
}

.cart-item-description {
  font-size: 9px;
  text-align: justify;
  margin-right: 20px;
  margin-top: 14px;
}

.cart-item-counter-and-sum {
  display: flex;
  width: calc(500px - 140px);
}

.cart-item-counter, .cart-item-sum {
  font-size: 16px;
  width: calc((500px - 140px) / 2);
  margin-top: 14px;
}

.cart-item-counter-btn {
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
}

.cart-item-sum {
  margin-right: 20px;
  text-align: end;
}

.cart-item-img {
  width: 100px;
  height: 100px;
  border-radius: 14px;
}

.cart-items-sum-container {
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
}

.sum-container-txt {
  width: 500px;
}

.sum-container-sum {
  width: 500px;
  text-align: end;
  margin-right: 20px;
}

.buyer-info {
  margin-top: calc(60px + 20px);
  margin-left: 10px;
  width: 600px;
  height: auto;
  /* background-color: #1E1E1E; */
  border-radius: 14px;
}

.buyer-info-top-part {
  width: 600px;
  height: 90px;
  margin-bottom: 10px;
  text-align: start;
}

.buyer-info-title
{
  font-size: 20px;
  color: #FFFF;
  /* width: 600px; */
  width: 200px;
  height: 40px;
  margin-bottom: 10px;
  text-align: start;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
}

.buyer-info-radio {
  margin-right: 2px;
  accent-color: #5F8484;
}

.radio-txt {
  margin-right: 10px;
}

.buyer-info-name-and-surname, .buyer-info-contacts, .buyer-info-address-info, .buyer-info-promo {
  display: flex;
}

.house, .apartment, .entrance, .floor {
  width: 75px !important;
}

.buyer-info-input {
  background-color: #1E1E1E;
  width: 300px;
  margin-bottom: 10px;
  margin-right: 10px;
  height: 30px;
  border-radius: 8px;
  border: none;
}

.street {
  background-color: #1E1E1E;
  width: 300px;
  margin-bottom: 10px;
  margin-right: 10px;
  height: 30px;
}

.comment {
  background-color: #1E1E1E;
  width: 590px;
  margin-bottom: 10px;
  margin-right: 10px;
  height: 100px;
}

.buyer-info-promo-btn {
  width: 200px;
  height: 50px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 14px;
  background-color: #5F8484;
}

.promo {
  width: 400px;
  height: 50px;
}

.order-btn-container {
  display: flex;
  justify-content: flex-end;
  width: 600px;
}

.order-btn {
  width: 190px;
  height: 50px;
  background-color: #1E1E1E;
  border-radius: 14px;
  margin-right: 10px;
}

.buyer-info-input.invalid {
  border: 1px solid red;
}

.order-btn.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>