class UserDetailSerializer < ActiveModel::Serializer
  attributes :id, :name_on_aacount, :bank_name, :account_number, :bank_code, :branch_code, :telephone_number
end
