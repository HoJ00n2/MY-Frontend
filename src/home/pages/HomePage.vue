<template>
  <div class="homepage">
    <div class="content">
      <h1>당신을 인플루언서로 만들어드립니다.<br>30초만 투자하세요.</h1>
      <button @click="getStarted" class="get-started-btn">GET STARTED</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    getStarted() {
      // 여기에 'GET STARTED' 버튼 클릭 시 실행할 로직을 추가하세요
      console.log('Get Started clicked!');
    }
  }
}
</script>

<style scoped>
.homepage {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #e0d0ff 0%, #b090ff 100%);
}

.content {
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  line-height: 1.4;
}

.get-started-btn {
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-started-btn:hover {
  background-color: #5541c7;
}
</style>