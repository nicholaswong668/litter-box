<script setup>
import { ref } from "vue";
import SiteHeader from "../components/SiteHeader.vue";
import SiteFooter from "../components/SiteFooter.vue";
import WhatsAppFloat from "../components/WhatsAppFloat.vue";
import { whatsappHref } from "../data";

const form = ref({
  fullName: "",
  businessEmail: "",
  companyName: "",
  country: "",
  whatsapp: "",
  interest: "",
  quantity: "",
  message: "",
});

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
  window.setTimeout(() => {
    submitted.value = false;
  }, 3500);

  form.value = {
    fullName: "",
    businessEmail: "",
    companyName: "",
    country: "",
    whatsapp: "",
    interest: "",
    quantity: "",
    message: "",
  };
}
</script>

<template>
  <div class="site-shell">
    <SiteHeader />

    <main class="contact-page">
      <section class="contact-page-hero">
        <p class="section-kicker">Seller Communication</p>
        <h2>Contact our team for product details, pricing, and WhatsApp support.</h2>
        <p class="contact-page-intro">
          Send your inquiry through the form below or start a direct WhatsApp
          chat with our sales team. The layout is centered for fast,
          professional communication.
        </p>
      </section>

      <section class="contact-page-center">
        <div class="contact-hub">
          <article class="contact-hub-card contact-hub-info">
            <p class="section-kicker contact-kicker-green">Fast Response</p>
            <h3>Talk to a seller the way global buyers usually do.</h3>
            <p>
              Use the inquiry form for catalog requests, quotations, MOQ, OEM,
              shipping questions, and product recommendations.
            </p>

            <div class="contact-info-list">
              <div class="contact-info-item">
                <strong>Email inquiry</strong>
                <span>Best for formal requests, quotations, and bulk details.</span>
              </div>
              <div class="contact-info-item">
                <strong>WhatsApp chat</strong>
                <span>Best for quick answers, pictures, and direct seller follow-up.</span>
              </div>
              <div class="contact-info-item">
                <strong>Typical fields</strong>
                <span>Name, company, email, country, WhatsApp, product interest, quantity.</span>
              </div>
            </div>

            <a
              class="contact-whatsapp-button"
              :href="whatsappHref"
              target="_blank"
              rel="noreferrer"
            >
              Contact on WhatsApp
            </a>
          </article>

          <article class="contact-hub-card contact-hub-form">
            <div class="contact-form-header">
              <h3>Submit your inquiry</h3>
              <p>We will review your request and follow up with the right product suggestion.</p>
            </div>

            <div v-if="submitted" class="contact-submit-success">
              Your inquiry has been recorded. Please also use WhatsApp if you want a faster reply.
            </div>

            <form v-else class="contact-form-grid" @submit.prevent="handleSubmit">
              <label class="contact-field">
                <span>Full name</span>
                <input v-model="form.fullName" type="text" placeholder="Your name" required />
              </label>

              <label class="contact-field">
                <span>Business email</span>
                <input
                  v-model="form.businessEmail"
                  type="email"
                  placeholder="name@company.com"
                  required
                />
              </label>

              <label class="contact-field">
                <span>Company name</span>
                <input v-model="form.companyName" type="text" placeholder="Company / Store name" />
              </label>

              <label class="contact-field">
                <span>Country / Region</span>
                <input v-model="form.country" type="text" placeholder="Country or market" />
              </label>

              <label class="contact-field">
                <span>WhatsApp</span>
                <input v-model="form.whatsapp" type="text" placeholder="+1 234 567 890" />
              </label>

              <label class="contact-field">
                <span>Product interest</span>
                <input
                  v-model="form.interest"
                  type="text"
                  placeholder="Model or product name"
                  required
                />
              </label>

              <label class="contact-field">
                <span>Estimated quantity</span>
                <input v-model="form.quantity" type="text" placeholder="For example: 100 units" />
              </label>

              <label class="contact-field contact-field-wide">
                <span>Message</span>
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Tell us what you need: price, MOQ, customization, shipping, or recommended model."
                  required
                />
              </label>

              <button class="contact-submit-button" type="submit">
                Submit Inquiry
              </button>
            </form>
          </article>
        </div>
      </section>
    </main>

    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>
