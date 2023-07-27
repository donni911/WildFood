
<div class="jsv-modal-quiz">
  <div>
    <transition name="pop">
      <div v-if="!modal" class="c-quiz__wrap">
        <button class="c-quiz__btn shadow" @click="openModal">Define a plan</button>
      </div>
    </transition>
    <transition name="pop">
      <div class="m-modal" v-if="modal">
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
            <div class="c-quiz">
              <div
                class="min-h-[320px] md:min-h-[475px] w-full flex flex-col bg-white p-4 md:p-[32px]"
              >
                <transition mode="out-in">
                  <div
                    :key="questions[activeQuestion].id"
                    class="flex flex-grow"
                    :class="{ 'pt-2 md:pb-[32px]': !quizFinished }"
                  >
                    <transition mode="out-in">
                      <div
                        v-if="!quizFinished"
                        class="flex w-full flex-col justify-between"
                      >
                        <h3
                          :key="questions[activeQuestion].question"
                          class="font-semibold md:text-9 mb-4"
                          :class="
                            {
                              'md:mb-4': questions[activeQuestion]?.subtitle,
                              'md:mb-12': !questions[activeQuestion]?.subtitle,
                            }
                          "
                          v-html="questions[activeQuestion].question"
                        ></h3>
                        <p
                          v-if="questions[activeQuestion].subtitle"
                          :key="questions[activeQuestion].subtitle"
                          class="color-primary opacity-30 font-medium mb-4"
                          v-html="questions[activeQuestion]?.subtitle"
                        ></p>
                        <div
                          class="grid h-full"
                          :class="
                            {
                              'grid-cols-2 gap-5':
                                questions[activeQuestion].type == 'double',
                              'sm:grid-cols-3 gap-5':
                                questions[activeQuestion].type == 'triple',
                              'sm:grid-cols-2 md:grid-cols-4 gap-5':
                                questions[activeQuestion].type == 'quarter',
                              'flex flex-wrap gap-5':
                                questions[activeQuestion].type == 'multiple',
                              'sm:grid-cols-2 gap-5':
                                questions[activeQuestion].type == 'input',
                              'grid-cols-2 gap-y-5':
                                questions[activeQuestion].type == 'inputDouble',
                              grid: 'inputSingle',
                            }
                          "
                        >
                          <template
                            v-if="questions[activeQuestion].type === 'mail'"
                          >
                            <div class="flex flex-col">
                              <h5 class="font-semibold text-5 mb-5">Email</h5>
                              <div
                                class="bg-local h-full rounded-2xl w-full flex items-center justify-center p-4"
                              >
                                <input
                                  type="mail"
                                  v-model.trim="
                                                                                                                                                                                                                                                                                                questions[activeQuestion].variants[0].value
                                  "
                                  @input="
                                    handleInputChange(
                                      questions[activeQuestion].variants[0]
                                    )
                                  "
                                  class="w-full outline-none flex-grow border-0 text-primary font-bold text-6 lg:text-8 bg-transparent text-center placeholder:text-primary placeholder:opacity-50"
                                  placeholder="mail@example.com"
                                >
                              </div>
                            </div>
                          </template>
                          <template
                            v-else-if="
                              questions[activeQuestion].type === 'input' ||
                              questions[activeQuestion].type === 'inputSingle'
                            "
                          >
                            <label
                              v-for="
                                input in questions[activeQuestion]
                                .variants
                              "
                              :key="input.title"
                              class="bg-local cursor-text h-full rounded-2xl w-full flex items-center justify-center p-4"
                            >
                              <input
                                v-model.trim="input.value"
                                @input="handleInputChange(input)"
                                :type="                                  input.title == 'months' ? 'number' : 'text'"
                                :placeholder="input.title"
                                class="w-full outline-none flex-grow border-0 text-primary font-bold text-6 lg:text-8 bg-transparent text-center placeholder:text-primary placeholder:opacity-50"
                              >
                            </label>
                          </template>
                          <template v-else>
                            <label
                              v-if="                                questions[activeQuestion].type === 'inputDouble'"
                              class="cursor-text bg-local h-full rounded-2xl w-full flex items-center justify-center p-4 col-span-3"
                            >
                              <input
                                type="text"
                                v-model.trim="
                                                                                                                                                                                                                                                                                questions[activeQuestion].variantInput.value
                                "
                                @input="
                                  handleInputChange(
                                    questions[activeQuestion].variantInput
                                  )
                                "
                                class="w-full outline-none flex-grow border-0 text-primary font-bold text-6 lg:text-8 bg-transparent text-center placeholder:text-primary placeholder:opacity-50"
                                placeholder="name of your pet"
                              >
                            </label>
                            <label
                              v-for="
                                variant in questions[activeQuestion]
                                .variants
                              "
                              :key="variant.id"
                              class="bg-local min-h-[100px] sm:hover:opacity-80 p-4 cursor-pointer transition"
                              :class="
                                {
                                  'c-gradient bg-no-repeat bg-center bg-cover mr-2.5 last:ml-2.5 last:mr-0':
                                    variant.bgImage,
                                  'bg-yellow pointer-events-none':
                                    variant.title ===
                                    questions[activeQuestion].answear?.title,
                                  'c-gradient--active opacity-50':
                                    variant.title ===
                                      questions[activeQuestion].answear?.title &&
                                    variant.bgImage,
                                  'min-w-[150px] max-h-[90px] rounded-[22px] flex-grow':
                                    questions[activeQuestion].type === 'multiple',
                                  'md:min-h-[196px] rounded-[22px] sm:rounded-[32px]':
                                    questions[activeQuestion].type !== 'multiple',
                                }
                              "
                              :style="
                                {
                                  backgroundImage:
                                    variant.bgImage && `url(${variant.bgImage})`,
                                }
                              "
                            >
                              <input
                                :value="variant.title"
                                :name="questions[activeQuestion].name"
                                type="radio"
                                class="hidden"
                                @change="handleSelection(variant)"
                              >
                              <div
                                class="relative z-10 flex items-center justify-center h-full"
                              >
                                <span
                                  class="font-semibold text-primary flex text-center justify-center items-center transition-colors gap-3 text-5.5"
                                  :class="
                                    {
                                      'text-white':
                                        variant.bgImage ||
                                        variant?.title ===
                                          questions[activeQuestion]?.answear
                                            ?.title,
                                    }
                                  "
                                >
                                  <template
                                    v-if="variant.icon && variant.icon == 'dog'"
                                  >
                                    <svg
                                      width="24"
                                      height="25"
                                      viewBox="0 0 24 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M1.07888 10.0832C-0.861711 10.0832 0.0888684 3.37035 1.78003 1.95016C3.05975 0.874956 5.73577 0.581718 7.10121 0.501222C7.51179 0.477264 7.81436 0.809792 7.68407 1.13657C6.81321 3.31477 3.88261 10.0832 1.07888 10.0832Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M16.3165 1.1374C16.1854 0.809663 16.4888 0.477135 16.8994 0.502051C18.2648 0.582547 20.9408 0.875785 22.2205 1.95099C23.9117 3.37022 24.8614 10.0831 22.9208 10.0831C20.1171 10.0831 17.1865 3.31464 16.3165 1.1374Z"
                                        fill="white"
                                      />
                                      <path
                                        d="M20.5647 10.5795C18.6301 9.06155 16.9347 5.93656 15.6481 2.93902C14.6358 2.60266 13.4289 2.41675 12 2.41675C10.5712 2.41675 9.3643 2.60266 8.35201 2.93902C7.06542 5.93656 5.36998 9.06155 3.43539 10.5795C3.32482 14.6014 6.55285 16.4212 6.76285 20.0877C6.79714 20.6626 6.28285 21.5922 6.28285 22.2246C6.28285 24.3521 8.57144 25.4158 12 23.4992C15.4286 25.4158 17.7172 24.3521 17.7172 22.2246C17.7172 21.5922 17.2029 20.6626 17.2372 20.0877C17.4481 16.4116 20.6753 14.5804 20.5647 10.5795ZM8.14286 11.9997C7.43314 11.9997 6.85714 11.3557 6.85714 10.5622C6.85714 9.76877 7.43314 9.12479 8.14286 9.12479C8.85258 9.12479 9.42859 9.76877 9.42859 10.5622C9.42859 11.3557 8.85258 11.9997 8.14286 11.9997ZM12 19.666C11.2303 19.666 9.52544 17.4591 9.91373 16.6033C10.38 15.576 13.6192 15.576 14.0855 16.6033C14.4746 17.4591 12.7698 19.666 12 19.666ZM15.8572 11.9997C15.1475 11.9997 14.5715 11.3557 14.5715 10.5622C14.5715 9.76877 15.1475 9.12479 15.8572 9.12479C16.5669 9.12479 17.1429 9.76877 17.1429 10.5622C17.1429 11.3557 16.5669 11.9997 15.8572 11.9997Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </template>
                                  <template
                                    v-if="variant.icon && variant.icon == 'cat'"
                                  >
                                    <svg
                                      width="24"
                                      height="25"
                                      viewBox="0 0 24 25"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M5.92105 21.9708C7.69737 22.8789 9.69079 23.3524 11.6842 23.3919C11.7829 23.3919 11.9013 23.3919 12 23.3919C14.0132 23.3919 16.0066 22.9577 17.8224 22.0893C19.4801 21.2998 20.9803 20.1156 22.0857 18.6353C23.3487 16.9377 24 14.905 24 12.793C24 11.4509 24 10.1285 24 8.78642C24 7.3259 24 5.88511 24 4.42458C24 3.91142 24 3.39826 24 2.90484C24 1.97721 23.0726 1.36537 22.2237 1.70089L17.7237 3.57589C17.4276 3.69432 17.0921 3.71405 16.7961 3.59563C15.3355 3.02326 13.7171 2.72721 12 2.72721C10.2829 2.72721 8.66447 3.043 7.20395 3.59563C6.9079 3.71405 6.57237 3.69432 6.27632 3.57589L1.77632 1.7603C0.927632 1.40504 0 2.03662 0 2.96425C0 3.65504 0 4.36557 0 5.05635C0 6.49714 0 7.93793 0 9.39846C0 10.6221 0 11.8261 0 13.0498C0 15.0037 0.631579 16.8985 1.75658 18.4774C2.82237 19.9577 4.2829 21.1419 5.92105 21.9708ZM16.3816 12.8327C17.4671 12.8327 18.3553 13.7208 18.3553 14.8064C18.3553 15.8919 17.4671 16.78 16.3816 16.78C15.2961 16.78 14.4079 15.8919 14.4079 14.8064C14.4079 13.7013 15.2961 12.8327 16.3816 12.8327ZM7.61842 12.8327C8.70395 12.8327 9.5921 13.7208 9.5921 14.8064C9.5921 15.8919 8.70395 16.78 7.61842 16.78C6.53289 16.78 5.64474 15.8919 5.64474 14.8064C5.64474 13.7013 6.53289 12.8327 7.61842 12.8327Z"
                                        fill="white"
                                      />
                                    </svg>
                                  </template>
                                  <span v-html="variant.title"></span>
                                </span>
                              </div>
                            </label>
                          </template>
                        </div>
                      </div>

                      <div v-else class="flex flex-col w-full">
                        <h1
                          class="c-title text-center mb-2 text-2xl text-primary"
                        >
                          Result
                        </h1>
                        <p class="c-description text-lg mb-5">
                          A personal diet plan for
                          <span class="font-bold" v-html="furryName"></span>
                          for 1 week. <br>
                          Build your box with favorite flavors:
                        </p>
                        <div class="bg-local p-4 rounded-[20px]">
                          <div class="">
                            <h3
                              class="sm:maxtext-2xs pb-4 relative font-semibold before:content-[''] before:rounded-[999px] before:bg-brown before:w-full before:h-0.5 before:absolute before:left-0 before:top-[100%]"
                            >
                              RECOMENDATIONS
                            </h3>
                            <div
                              class="flex justify-between items-center mt-4 font-bold sm:maxtext-xs text-primary gap-2"
                            >
                              <h4 class="uppercase" v-html="furryName"></h4>
                              <div class="shrink-0 flex flex-col gap-1">
                                <!-- <p>{{ computedCormPerDay }} oz/day</p> -->
                                <p>
                                  <span v-html="propose.perDay"></span>
                                  <span
                                    v-html="
                                      `${
                                        propose.perDay == 1 ? ' pack' : ' packs'
                                      } / day`
                                    "
                                  ></span>
                                </p>
                                <p>
                                  <span v-html="propose.perWeek"></span>
                                  <span
                                    v-html="
                                      `${
                                        propose.perWeek == 1
                                          ? ' pack'
                                          : ' packs'
                                      } / week`
                                    "
                                  ></span>
                                </p>
                                <p v-html="`$${calculateTotalSum.toFixed(2)} / week`"></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="mt-4 mb-4 flex flex-grow items-center justify-center"
                        >
                          <ul
                            class="c-products__list quiz visible w-full"
                            v-if="propose"
                          >
                            <li
                              v-for="(item, key) in propose.ration"
                              :key="key"
                              class="c-products__item w-full"
                            >
                              <a :href="item.url" class="c-product">
                                <div class="c-product__image">
                                  <img
                                    :src="item.imgUrl"
                                    :alt="item.title"
                                    @load="handleImageLoad(key)"
                                    :class="
                                      {
                                        'c-product__image--loading': loading[key],
                                      }
                                    "
                                  >
                                  <div
                                    v-if="loading[key]"
                                    class="c-product__loading"
                                  >
                                    <svg
                                      width="158"
                                      height="26"
                                      viewBox="0 0 158 26"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M26.9311 18.1066L21.0692 0.813414L20.9352 0.331375H16.7147L10.6853 18.1066L4.82348 0.813414L4.656 0.331375H0L8.44109 25.1263L8.60857 25.6083H12.7956L18.825 7.86324L24.6868 25.1263L24.8208 25.6083H29.0079L37.6164 0.331375H32.9604L26.9311 18.1066Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M43.4113 6.32674H38.7888V25.6083H43.4113V6.32674Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M41.1 0C39.6262 0 38.4203 1.08459 38.4203 2.4102C38.4203 3.7358 39.6262 4.82039 41.1 4.82039C42.5739 4.82039 43.7797 3.7358 43.7797 2.4102C43.7797 1.08459 42.5739 0 41.1 0Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M51.1489 0.331375H46.5264V25.6083H51.1489V0.331375Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M71.0123 7.86324C69.1031 6.59789 66.7918 5.90495 64.4136 5.90495C58.2502 5.90495 53.2258 10.4241 53.2258 15.9675C53.2258 21.511 58.2502 26 64.4136 26C70.5769 26 75.5679 21.511 75.5679 15.9675V0.331375H71.0123V7.86324ZM71.1798 15.9977C71.1798 19.3418 68.1652 22.0533 64.4471 22.0533C60.6955 22.0533 57.6808 19.3418 57.6808 15.9977C57.6808 12.6234 60.729 9.9119 64.4471 9.9119C68.1317 9.88178 71.1798 12.6234 71.1798 15.9977Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M87.928 6.32674H83.54C84.3104 5.1819 85.6837 4.45884 87.1911 4.45884H87.928V0.331375H87.1911C82.3006 0.331375 78.348 3.91654 78.348 8.31515V25.6083H82.9035V10.1529H87.928V6.32674Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M98.7472 5.90497C92.5838 5.90497 87.5594 10.4241 87.5594 15.9675C87.5594 21.511 92.5838 26 98.7472 26C104.911 26 109.935 21.511 109.935 15.9675C109.935 10.4241 104.911 5.90497 98.7472 5.90497ZM105.48 15.9977C105.48 19.3418 102.465 22.0533 98.7472 22.0533C95.0291 22.0533 92.0144 19.3418 92.0144 15.9977C92.0144 12.6234 95.0291 9.91192 98.7472 9.91192C102.465 9.91192 105.48 12.6234 105.48 15.9977Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M122.53 5.90497C116.366 5.90497 111.342 10.4241 111.342 15.9675C111.342 21.511 116.366 26 122.53 26C128.693 26 133.718 21.511 133.718 15.9675C133.751 10.4241 128.727 5.90497 122.53 5.90497ZM122.53 22.0533C118.812 22.0533 115.797 19.3418 115.797 15.9977C115.797 12.6234 118.812 9.91192 122.53 9.91192C126.248 9.91192 129.263 12.6535 129.263 15.9977C129.296 19.3418 126.248 22.0533 122.53 22.0533Z"
                                        fill="#1D1D1B"
                                      />
                                      <path
                                        d="M152.944 0.331375V7.86324C151.035 6.59789 148.724 5.90495 146.346 5.90495C140.182 5.90495 135.158 10.4241 135.158 15.9675C135.158 21.511 140.182 26 146.346 26C152.509 26 157.5 21.511 157.5 15.9675V0.331375H152.944ZM153.078 15.9977C153.078 19.3418 150.064 22.0533 146.346 22.0533C142.594 22.0533 139.579 19.3418 139.579 15.9977C139.579 12.6234 142.628 9.9119 146.346 9.9119C150.064 9.88178 153.078 12.6234 153.078 15.9977Z"
                                        fill="#1D1D1B"
                                      />
                                    </svg>
                                  </div>
                                </div>
                                <div class="c-product__wrap">
                                  <!--
                                    <span
                                      class="c-product__pieces"
                                      v-html="`Amount: ` + item.amount"
                                    ></span>
                                  -->
                                  <h3
                                    class="c-product__title sm-max:text-sm"
                                    v-html="item.title"
                                  ></h3>
                                  <h4
                                    class="c-product__price mt-auto"
                                    v-html="`$${item.price}`"
                                  ></h4>
                                  <a
                                    :href="item.url"
                                    class="f-btn f-btn--primary-ghost w-full mt-4 rounded-lg bg-primary hover:bg-transparent text-white z-20"
                                  >
                                    Buy
                                  </a>
                                </div>
                              </a>
                            </li>
                          </ul>
                          <div v-else>
                            <h5
                              class="text-primary font-semibold text-xl text-center"
                            >
                              Sorry,we can't caluclate your diet plan, try again.
                            </h5>
                          </div>
                        </div>
                        <div class="flex justify-center mt-auto">
                          <button
                            class="w-fit f-btn f-btn--primary-ghost"
                            @click="restartQuiz"
                          >
                            Try Quiz again
                          </button>
                        </div>
                      </div>
                    </transition>
                  </div>
                </transition>

                <transition mode="out-in">
                  <div
                    v-if="!quizFinished"
                    class="sm-max:flex-col w-full flex sm:items-center justify-between gap-5 h-fit"
                  >
                    <div class="text-primary font-sans text-xs md:text-[24px]">
                      <!--
                        <span
                          class="inline-flex font-manrope font-medium justify-between text-6 md:text-[34px]"
                        >
                          <transition mode="out-in">
                            <span
                              class="min-w-[32px] md:min-w-[42px]"
                              :key="activeQuestionComputed"
                            >{{ activeQuestionComputed }}</span
                            >
                          </transition>
                          /
                        </span>
                      -->
                      <!-- {{ questionsLength }} -->
                    </div>
                    <div
                      class="c-quiz__nav w-full flex sm:justify-end gap-1.5 md:gap-3"
                    >
                      <button
                        v-if="!finalQuestion"
                        class="f-btn f-btn--primary-ghost h-fit"
                        :disabled="activeQuestion == 0"
                        @click="previousQuestion"
                      >
                        Previous
                      </button>
                      <transition mode="out-in">
                        <button
                          :key="activeQuestion == questions.length - 1"
                          :disabled="disabledBtn"
                          class="f-btn f-btn--primary-ghost h-fit"
                          @click="finalQuestion ? finishQuiz() : nextQuestion()"
                          v-html="finalQuestion ? 'Finish' : 'Next'"
                        ></button>
                      </transition>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</div>