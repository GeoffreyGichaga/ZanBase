class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :username
      t.string :role
      t.string :supervisor
      t.string :name_on_account
      t.string :bank_name
      t.string :account_number
      t.string :bank_code
      t.string :branch_code
      t.integer :telephone_number
      t.string :password_digest

      t.timestamps
    end
  end
end
