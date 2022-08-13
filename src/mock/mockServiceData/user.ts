import Mock from "mockjs";

Mock.setup({
  timeout: "200-600",
});

const { Random } = Mock;
const { mock } = Mock;

export default {
  getUserData: () => {
    const result: UserData[] = [];

    for (let i = 0; i < 60; i++) {
      const list: UserData = {
        id: i + 1,
        name: Random.cname(),
        age: Random.natural(18, 35),
        sex: Random.pick(["男", "女"]),
        birthday: Random.date("yyyy-MM-dd"),
        address: Random.province() + Random.city() + Random.county(),
      };
      result.push(list);
    }
    return result;
  },
};

interface UserData {
  id: number;
  name: string;
  age: number;
  sex: "男" | "女";
  birthday: string;
  address: string;
}
