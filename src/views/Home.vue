<!--
 * @Author: Chunlai
 * @Email: chunlai0928@foxmail.com
 * @Date: 2020-03-11 15:38:26
 * @LastEditors: Chunlai
 * @LastEditTime: 2020-03-14 21:26:21
 -->
<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import NavHeader from './../components/NavHeader';
import NavFooter from './../components/NavFooter';
export default {
    name: 'nav-home',
    components: {
        NavHeader,
        NavFooter
    }
}
</script>