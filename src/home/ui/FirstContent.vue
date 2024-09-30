<template>
  <div class="main-container">
    <div class="video-container">
      <video ref="videoPlayer" class="fullscreen-video" :src="videoSource" autoplay muted playsinline
        @play="startOverlayTimer" @error="handleError"></video>
      <transition name="fade">
        <div v-if="isOverlayVisible" class="overlay">
          <div class="overlay-text">
            <h1 :class="{ 'fade-in': showTitle }">{{ overlayTitleOne }}</h1>
            <h1 :class="{ 'fade-in': showTitle }">{{ overlayTitleTwo }}</h1>
            <p :class="{ 'fade-in': showDescription }">{{ overlayDescription }}</p>
          </div>
          <button @click="getStarted" class="get-started-btn" :class="{ 'fade-in': showButton }">GET STARTED</button>
          <transition name="fade">
            <div v-if="showArrow" class="down-arrow">
              <ChevronDown :size="48" />
            </div>
          </transition>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import router from "@/router";

export default {
  name: 'FirstContent',
  components: {
    ChevronDown
  },
  props: {
    videoSource: {
      type: String,
      required: true
    },
    overlayTitleOne: {
      type: String,
      default: ''
    },
    overlayTitleTwo: {
      type: String,
      default: ''
    },
    overlayDescription: {
      type: String,
      default: ''
    }
  },
  setup() {
    const videoPlayer = ref(null);
    const isOverlayVisible = ref(false);
    const showTitle = ref(false);
    const showDescription = ref(false);
    const showButton = ref(false);
    const showArrow = ref(false);

    const startOverlayTimer = () => {
      setTimeout(() => {
        showOverlay();
      }, 1300);
    };

    const showOverlay = () => {
      isOverlayVisible.value = true;
      setTimeout(() => {
        showTitle.value = true;
        setTimeout(() => {
          showDescription.value = true;
          setTimeout(() => {
            showButton.value = true;
            setTimeout(() => {
              showArrow.value = true;
            }, 1000);
          }, 1000);
        }, 1000);
      }, 100);
    };

    const handleError = (event) => {
      console.error('Video playback error:', event);
    };

    return {
      videoPlayer,
      isOverlayVisible,
      showTitle,
      showDescription,
      showButton,
      showArrow,
      startOverlayTimer,
      handleError,
    };
  },
  methods: {
    getStarted(){
      router.push("/login")
    }
  }
}
</script>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.fullscreen-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.overlay-text {
  text-align: center;
  color: white;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.overlay-text h1 {
  font-size: 3rem;
  opacity: 0;
  transition: opacity 2s ease;
}

.overlay-text h1:last-of-type {
  margin-bottom: 20px;
}

.overlay-text p,
.get-started-btn,
.overlay-text h1 {
  opacity: 0;
  transition: opacity 2s ease;
}

.overlay-text p.fade-in,
.get-started-btn.fade-in,
.overlay-text h1.fade-in {
  opacity: 1;
}

.overlay-text p {
  font-size: 1.5rem;
}

.get-started-btn {
  background-color: #ff9033;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 2s ease;
  margin-top: 30px;
  border-radius: 30px;
  font-weight: bold;
}

.get-started-btn:hover {
  background-color: #ff8f33d6;
}

.down-arrow {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}
</style>