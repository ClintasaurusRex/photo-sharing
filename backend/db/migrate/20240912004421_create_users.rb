class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :email
      t.string :password_digest
      t.boolean :receive_updates, default: false
      t.timestamps
    end
  end
end
