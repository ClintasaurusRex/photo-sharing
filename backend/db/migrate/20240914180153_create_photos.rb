class CreatePhotos < ActiveRecord::Migration[7.2]
  def change
    create_table :photos do |t|
      t.references :user, null: false, foreign_key: true
      t.string :photo_url
      t.text :description

      t.timestamps
    end
  end
end
