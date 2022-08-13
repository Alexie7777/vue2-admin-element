<template>
  <div>
    <div class="flex m-5">
      <el-button size="mini" type="primary" @click="addUserFormVisible = true"
        >+ 新 增</el-button
      >

      <el-dialog title="新增用户" :visible.sync="addUserFormVisible">
        <el-form :model="addUserForm" :rules="rules" ref="addRuleForm">
          <div class="flex flex-row">
            <el-form-item label="姓名" prop="name" label-width="100px" required>
              <el-input
                class="w-40"
                size="small"
                v-model="addUserForm.name"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="age" label="年龄" label-width="60px" required>
              <el-input
                class="w-40"
                size="small"
                v-model.number="addUserForm.age"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="sex" label="性别" label-width="60px" required>
              <el-select
                size="small"
                class="w-40"
                v-model="addUserForm.sex"
                filterable
                autocomplete="off"
              >
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="flex">
            <el-form-item
              prop="birthday"
              label="出生日期"
              label-width="125px"
              required
            >
              <el-date-picker
                class="w-60"
                v-model="addUserForm.birthday"
                type="date"
                size="small"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item
              class="ml-auto mr-9"
              prop="address"
              label="地址"
              label-width="80px"
              required
            >
              <el-cascader
                class="w-60"
                size="small"
                v-model="addUserForm.addressCode"
                @change="handleAddress"
                :options="addressOptions"
              >
              </el-cascader>
            </el-form-item>
          </div>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addUserFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleSubmit('addRuleForm')"
            >确 定</el-button
          >
        </div>
      </el-dialog>

      <div class="flex ml-auto">
        <el-input placeholder="请输入内容" v-model="searchBox" clearable>
        </el-input>
        <el-button type="primary">搜索</el-button>
      </div>
    </div>

    <el-table
      v-loading="isLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      border
      :data="computedData"
      style="width: 100%"
      stripe
    >
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120"></el-table-column>
      <el-table-column
        prop="birthday"
        label="出生日期"
        width="150"
      ></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template> </el-table-column
      >>
    </el-table>

    <div class="flex">
      <el-pagination
        class="m-auto"
        @current-change="curChange"
        @size-change="sizeChange"
        layout="prev, pager, next"
        :page-size="10"
        :total="total"
      >
      </el-pagination>
    </div>

    <el-dialog title="编辑用户" :visible.sync="editUserFormVisible">
      <el-form :model="editUserForm" :rules="rules" ref="editRuleForm">
        <div class="flex flex-row">
          <el-form-item label="姓名" prop="name" label-width="100px" required>
            <el-input
              class="w-40"
              size="small"
              v-model="editUserForm.name"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="age" label="年龄" label-width="60px" required>
            <el-input
              class="w-40"
              size="small"
              v-model.number="editUserForm.age"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="sex" label="性别" label-width="60px" required>
            <el-select
              size="small"
              class="w-40"
              v-model="editUserForm.sex"
              filterable
              autocomplete="off"
            >
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="flex">
          <el-form-item
            prop="birthday"
            label="出生日期"
            label-width="125px"
            required
          >
            <el-date-picker
              class="w-60"
              v-model="editUserForm.birthday"
              type="date"
              :default-value="new Date()"
              size="small"
              placeholder="选择日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item
            class="ml-auto mr-9"
            prop="address"
            label="地址"
            label-width="80px"
            required
          >
            <el-cascader
              class="w-60"
              size="small"
              v-model="editUserForm.addressCode"
              @change="handleEditAddress"
              :options="addressOptions"
            >
            </el-cascader>
          </el-form-item>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editUserFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEditSubmit('editRuleForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { regionData, CodeToText } from "element-china-area-data";
import spacetime from "spacetime";

@Component
export default class UserView extends Vue {
  tableData = [];
  page = 1;
  pageSize = 10;
  searchBox = "";
  isLoading = true;
  addressOptions = regionData;
  rules = {
    name: [{ type: "string", required: true, message: "请输入用户姓名" }],
    age: [
      { required: true, message: "请输入用户年龄" },
      { type: "number", min: 1, max: 122, message: "请输入1 - 122 间的数字" },
    ],
    sex: [{ type: "string", required: true, message: "请输入用户性别" }],
    birthday: [{ required: true, message: "请选择日期" }],
    address: [{ type: "string", required: true, message: "请选择地址" }],
  };
  addUserForm = {
    id: "",
    name: "",
    age: "",
    sex: "",
    birthday: "",
    address: "",
    addressCode: "",
  };
  editUserForm = {};
  addUserFormVisible = false;
  editUserFormVisible = false;

  get total() {
    return this.tableData.length;
  }

  get computedData() {
    return this.tableData.slice(
      (this.page - 1) * this.pageSize,
      this.page * this.pageSize
    );
  }

  curChange(page: number) {
    this.page = page;
  }

  sizeChange(pageSize: number) {
    this.pageSize = pageSize;
  }

  handleEdit(index, row) {
    this.editUserFormVisible = true;
    this.editUserForm = row;
  }

  handleDelete(index, row) {
    this.$confirm(`此操作将会永久移除用户 "${row.name}" , 是否继续?`, "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(() => {
        this.tableData.slice(index, 1);

        this.$message({
          type: "error",
          message: "删除成功!",
        });
        this.tableData.splice(index, 1);
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "取消删除",
        });
      });
  }

  handleAddress(value) {
    let result = "";
    value.forEach((item) => {
      result += CodeToText[item];
    });
    this.addUserForm.address = result;
  }

  handleEditAddress(value) {
    console.log(value);
    let result = "";
    value.forEach((item) => {
      result += CodeToText[item];
    });
    this.editUserForm.address = result;
  }

  handleSubmit(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        this.addUserForm.id = this.total + 1;
        this.newUserData();
        this.addUserFormVisible = false;
        this.$message({
          type: "info",
          message: "添加成功",
        });
      } else {
        console.log("error submit");
        return false;
      }
    });
  }

  handleEditSubmit(formName) {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        const { id } = this.editUserForm;
        this.tableData[id] = this.editUserForm;
        this.editUserFormVisible = false;

        this.$message({
          type: "info",
          message: "编辑成功",
        });
      } else {
        console.log("error submit");
        return false;
      }
    });
  }

  newUserData() {
    this.addUserForm.birthday = spacetime(this.addUserForm.birthday).format(
      "{year}-{date-pad}-{month-pad}"
    );
    // console.log(JSON.stringify(this.addUserForm));
    this.tableData.push(JSON.parse(JSON.stringify(this.addUserForm)));
    this.resetAddUserForm();
  }

  resetAddUserForm() {
    for (let key in this.addUserForm) {
      this.addUserForm[key] = "";
    }
  }

  async created() {
    const response = await this.$http.get("/api/userData");
    this.tableData = response.data;
    this.isLoading = false;
  }
}
</script>

<style lang="scss" scoped></style>
