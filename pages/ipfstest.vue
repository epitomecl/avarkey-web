<template>
  <section class="container">
    <div>      
      <h1 class="title">
        IPFS test
      </h1>
      <h2 class="subtitle">
        ipfs - infura
      </h2>
      <div>
        <form onsubmit="submitFile">
          <input type="file" onchange="captureFile" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import IPFS from 'ipfs-api'

export default {
  components: {
    
  },

  data() {
    return {
      buffer: null
    }
  },

  methods: {
    captureFile(e) {
      e.stopPropagation()
      e.preventDefault()
      const file = e.target.files[0]
      let reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloaded = () => this.convertToBuffer(reader)
    },

    async convertToBuffer(reader) {
      const buffer = await Buffer.from(reader.result)
      this.buffer = buffer
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
