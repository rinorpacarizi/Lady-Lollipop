<template>
  <div style="height: 500px">
    <h1 class="h1-create-edit">Edit Item</h1>

    <hr style="border: 1px solid #fd4b4b9e" />
    <div>
      <div>
        <form class="form">
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Name </label>
            <input class="input-create-edit form-control" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Price</label>
            <input class="input-create-edit form-control" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label">Stock</label>
            <input class="input-create-edit form-control" />
          </div>
          <div class="form-group div-create-edit">
            <label class="control-label label-create-edit label"
              >Description</label
            >
            <textarea class="input-create-edit form-control"></textarea>
          </div>
          <div>
            <button class="cancel" @click="cancel()">Cancel</button>
            <button type="submit" class="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditItem",
  methods: {
    cancel() {
      this.$emit("changeDisplay", false);
    },
  },
};
</script>

<style>
.el-dialog__body {
  padding: 0px 12px !important;
}
.form {
  position: relative;
  left: 60px;
  width: 500px;
}
.submit {
  position: relative;
    width: 102px;
    height: 43px;
    font-size: 20px;
    border-radius: 6px;
    background-color: lightseagreen;
    color: white;
    border: none;
    top: 22px;
    left: 161px;
}
.label {
  float: left;
}
.cancel {
  color: white;
  background: red;
  border: none;
  position: relative;
  width: 99px;
  height: 41px;
  border-radius: 6px;
  text-align: center;
  right: 141px;
  top: 22px;
  font-size: 20px;
}
</style>