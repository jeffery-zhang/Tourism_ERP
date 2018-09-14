<template>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Sider hide-trigger>Sider</Sider>
      <Content>
        <router-view/>    
      </Content>
    </Layout>
  </Layout>
</template>

<script>
export default {

}
</script>

<style>
.ivu-layout-content {
  height: calc(100vh - 64px);
}
</style>
