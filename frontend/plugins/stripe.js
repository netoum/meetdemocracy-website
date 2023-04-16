import Vue from 'vue'
import { Stripe } from '@stripe/stripe-js'

Vue.prototype.$stripe = Stripe(process.env.STRIPE_PUBLIC_KEY)