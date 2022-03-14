<template>
  <div>
    <ul class="row-div">
      <li class="li-cards">
        <div>
          <a><img class="img" v-if="src" :src="src" /></a>
        </div>
        <div>
          <p class="name-p">
            <a>{{ sweet.name }}</a>
          </p>
          <p class="price-p" step="0.01">{{ sweet.price }}</p>
          <p class="stock-p">{{ sweet.stock }} in stock</p>
        </div>
        <div>
          <b-button class="cart">Add To Cart</b-button>
        </div>
        <div class="index-button-div">
          <el-button
            class="edit-delete-sweets"
            type="text"
            @click="editFormVisible = true"
            ><i class="el-icon-edit"></i
          ></el-button>
          <el-dialog top="13vh" width="43%" :visible.sync="editFormVisible">
            <EditSweet :sweets="sweet" v-on:changeDisplay="editFormNotVisible($event)" />
          </el-dialog>
          <el-button
            class="edit-delete-sweets"
            type="text"
            @click="deleteFormVisible = true"
            ><i class="el-icon-delete"></i>
          </el-button>
          <el-dialog
            :visible.sync="deleteFormVisible"
            style="width: 65vw; top: 15vh; margin-left: 265px"
          >
            <DeleteSweet
              :id="id"
              v-on:changeDisplay="deleteFormNotVisible($event)"
            />
          </el-dialog>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import EditSweet from "../Sweets/EditSweet.vue";
import DeleteSweet from "../Sweets/DeleteSweet.vue";
export default {
  components: {
    EditSweet,
    DeleteSweet,
  },
  data() {
    return {
      editFormVisible: false,
      deleteFormVisible: false,
      id:null,
    };
  },
  props: {
    sweet: Object,
  },
  computed: {
    src() {
      const filename = this.sweet.files?.split(";")[0];
      return filename ? `http://localhost:3000/static/${filename}` : null;
    },
  },
  mounted(){
    this.id=this.sweet._id
  },
  methods: {
    deleteFormNotVisible(e) {
      this.deleteFormVisible = e;
    },
    editFormNotVisible(e) {
      this.editFormVisible = e;
    },
  },
};
</script>

<style scoped>
.li-cards {
  display: flex;
  flex-direction: column;
  flex: 1 0 15%;
  align-items: center;
  height: 515px;
  width: 310px;
  border-radius: 12px;
  padding: 22px 20px 0px 20px;
  background-color: #ffffff;
  margin-right: 27px;
  margin-bottom: 25px;
  box-shadow: 0px 2px 10px #cc66669e;
  border: 2px solid #fd4b4b5e;
}
.row-div {
  position: relative;
  top: 10px;
  left: 55px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px 1px 0px 17px;
}
.edit-delete-sweets {
  background-color: #fd4b4b;
  border-radius: 19px;
  height: 30px;
  width: 30px;
  text-align: center;
  padding-top: 7px;
  margin-bottom: 8px;
  color: white;
}
.index-button-div {
  position: relative;
  display: flex;
  flex-direction: column;
  left: 120px;
  bottom: 130px;
}
.el-dialog__header {
  padding: 0 !important;
}
.img {
  width: 235px;
  height: 265px;
  border-radius: 8px;
}
.name-p {
  padding-top: 5px;
  font-family: Galdeano;
  font-size: 25px;
  margin-bottom: 0px;
  color: black;
  width: 235px;
  text-align: center;
  height: 75px;
}
.price-p {
  font-family: monospace;
  font-size: 25px;
  text-align: center;
  color: #fd4b4b;
  padding-top: 5px;
}
.stock-p {
  font-size: 12px;
  color: gray;
  text-align: center;
}
.cart {
  background-color: #fd4b4b !important;
  color: #ffffff;
  border-radius: 20px;
  width: 125px;
  height: 40px;
  border: none;
  text-align: center;
  padding-top: 8px;
}
</style>