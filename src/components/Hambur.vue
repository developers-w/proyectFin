<template>
  <div class="contenedorHambur">
    <div class="hambur">
      <button :class="{ open: active }" @click="active = !active">
        <span class="topLine"></span>
        <span class="middleLine"></span>
        <span class="bottomLine"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {},
  computed: {},
};
</script>

<style>
.hambur {
  width: 24px;
  height: 24px;
}

.hambur button span {
  border-radius: 2px;
  background: white;
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  height: 2px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.hambur button {
  background-color: transparent;
  border: 0;
  padding: 0;
  cursor: pointer;
  margin: 0;
  width: 24px;
  height: 24px;
}
.hambur button.open .topLine {
  animation-name: topLine-animation;
}
.hambur button.open .middleLine {
  animation-name: middleLine-animation;
}
.hambur button.open .bottomLine {
  animation-name: bottomLine-animation;
}

.hambur button .topLine {
  animation-name: topLine-animation-close;
}
.hambur button .middleLine {
  animation-name: middleLine-animation-close;
}
.hambur button .bottomLine {
  animation-name: bottomLine-animation-close;
}

@keyframes topLine-animation {
  50%,
  100% {
    margin: 0 auto;
    transform: translateY(2px) rotate(-45deg);
  }
}
@keyframes middleLine-animation {
  50%,
  100% {
    margin: 0 auto;
    transform: translateY(2px) rotate(-45deg);
  }
}
@keyframes bottomLine-animation {
  50%,
  100% {
    margin: 0 auto;
    transform: translateY(-2px) rotate(45deg);
  }
}
@keyframes middleLine-animation {
  20%,
  100% {
    margin: 0 auto;
    width: 0;
    opacity: 0;
  }
}
@keyframes topLine-animation-close {
  0% {
    margin: 0 auto;
    transform: translateY(2px) rotate(-45deg);
  }
  50%,
  100% {
    margin: 5px auto;
    transform: translateY(0px) rotate(0deg);
  }
}
@keyframes middleLine-animation-close {
  0% {
    margin: 0 auto;
    transform: translateY(2px) rotate(-45deg);
  }
  20%,
  100% {
    margin: 0 auto;
    width: 100%;
    opacity: 1;
  }
}

@keyframes bottomLine-animation-close {
  0% {
    margin: 0 auto;
    transform: translateY(-2px) rotate(-45deg);
  }
  50%,
  100% {
    margin: 5px auto;
    transform: translateY(0) rotate(0deg);
  }
}
</style>