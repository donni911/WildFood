<template>
  <div>
    <transition name="pop">
      <div v-if="!modal" class="c-quiz__wrap">
        <button class="c-quiz__btn shadow" @click="openModal">
          Define a plan
        </button>
      </div>
    </transition>
    <transition name="pop">
      <div class="m-modal" v-if="modal" appear>
        <div class="m-overlay" @click="closeModal"></div>
        <div class="m-dialog m-dialog--centered">
          <div class="m-content">
            <button class="m-close" @click="closeModal">
              <svg
                class="i-icon"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6747 9.67501L2.99961 -3.53456e-05L0.779297 2.22028L10.4543 11.8953L0.999612 21.3501L3.21993 23.5704L12.6747 14.1156L22.1294 23.5703L24.3497 21.35L14.895 11.8953L24.57 2.22031L22.3497 0L12.6747 9.67501Z"
                />
              </svg>
            </button>
            <Component />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Component from "./Component.vue";
export default {
  components: {
    Component,
  },
  data() {
    return {
      modal: false,
    };
  },

  methods: {
    openModal() {
      this.modal = true;
      document.documentElement.classList.add("is-modal-open");
      //   this.loadFromLocalStorage();
    },
    closeModal() {
      this.modal = false;
      document.documentElement.classList.remove("is-modal-open");
    },

    // loadFromLocalStorage() {
    //   const storedPropose = localStorage.getItem("propose");
    //   const furryName = localStorage.getItem("furryName");
    //   if (storedPropose) {
    //     this.propose = JSON.parse(storedPropose);
    //     this.furryName = JSON.parse(furryName);
    //     this.quizFinished = true;
    //   }
    // },
  },
};
</script>
