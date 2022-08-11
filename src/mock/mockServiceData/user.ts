import Mock from "mockjs";

Mock.setup({
  timeout: 500,
});

const { Random } = Mock;
const { mock } = Mock;

export default {
  getUserData: (): UserData => {
    const name = Random.cname();
    const age = Random.natural(18, 35);
    const sex = Random.pick(["男", "女"]);
    const birthday = Random.date("yyyy-MM-dd");
    const address = Random.county() + Random.province() + Random.city();

    return {
      data: {
        name,
        age,
        sex,
        birthday,
        address,
      },
    };
  },
};

interface UserData {
  data: {
    name: string;
    age: number;
    sex: "男" | "女";
    birthday: string;
    address: string;
  };
}
