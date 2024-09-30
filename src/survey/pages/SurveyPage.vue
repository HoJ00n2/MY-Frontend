<template>
    <div class="survey-container">
        <h1 class="survey-title">MBTI가 무엇입니까?</h1>
        <div class="options">
            <label class="option">
                <input type="radio" value="ISTJ" v-model="selectedMBTI" />
                ISTJ
            </label>
            <label class="option">
                <input type="radio" value="ISFJ" v-model="selectedMBTI" />
                ISFJ
            </label>
            <label class="option">
                <input type="radio" value="INFJ" v-model="selectedMBTI" />
                INFJ
            </label>
            <label class="option">
                <input type="radio" value="INTJ" v-model="selectedMBTI" />
                INTJ
            </label>
            <label class="option">
                <input type="radio" value="ISTP" v-model="selectedMBTI" />
                ISTP
            </label>
            <label class="option">
                <input type="radio" value="ISFP" v-model="selectedMBTI" />
                ISFP
            </label>
            <label class="option">
                <input type="radio" value="INFP" v-model="selectedMBTI" />
                INFP
            </label>
            <label class="option">
                <input type="radio" value="INTP" v-model="selectedMBTI" />
                INTP
            </label>
            <label class="option">
                <input type="radio" value="ESTP" v-model="selectedMBTI" />
                ESTP
            </label>
            <label class="option">
                <input type="radio" value="ESFP" v-model="selectedMBTI" />
                ESFP
            </label>
            <label class="option">
                <input type="radio" value="ENFP" v-model="selectedMBTI" />
                ENFP
            </label>
            <label class="option">
                <input type="radio" value="ENTP" v-model="selectedMBTI" />
                ENTP
            </label>
            <label class="option">
                <input type="radio" value="ESTJ" v-model="selectedMBTI" />
                ESTJ
            </label>
            <label class="option">
                <input type="radio" value="ESFJ" v-model="selectedMBTI" />
                ESFJ
            </label>
            <label class="option">
                <input type="radio" value="ENFJ" v-model="selectedMBTI" />
                ENFJ
            </label>
            <label class="option">
                <input type="radio" value="ENTJ" v-model="selectedMBTI" />
                ENTJ
            </label>
        </div>
        <button class="submit-button" @click="submit">확인</button>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const selectedMBTI = ref('');

        const submit = () => {
            console.log('선택된 MBTI:', selectedMBTI.value);
        }

        return { selectedMBTI, submit }
    }
}
</script>

<style>
.survey-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
}

.survey-title {
    text-align: center;
    color: #333;
}

.options {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
}

.option {
    width: 45%;
    margin: 10px 2.5%;
    font-size: 18px;
}

.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.submit-button:hover {
    background-color: #0056b3;
}
</style>