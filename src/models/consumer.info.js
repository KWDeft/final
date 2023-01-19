import mongoose, { Schema } from 'mongoose';

const ConsumerSchema = new Schema({
  usernum: Number, // 회원 번호
  userheight: Number, // 키
  userwidth: Number, // 몸무게
  sex: String, // 성별
  existence: String, // 장애 유무
  name: String, // 이름
  obstacle_type: String, // 장애 유형
  phone: String, // 전화번호
  address: String, // 주소
  memo: String, // 기타 메모
  manager: String, // 담당자
  payment: String, // 결제정보
  inflow: String, // 유입경로(소개정보)
  statement: String, // 상태
  date_signup: String, // 가입일시
});

ConsumerSchema.statics.findByUsernum = function (usernum) {
  return this.findOne({ usernum });
};

const Consumer = mongoose.model('Consumer', ConsumerSchema);
export default Consumer;
