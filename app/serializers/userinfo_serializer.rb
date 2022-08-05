class UserinfoSerializer < ActiveModel::Serializer
  attributes :summary


  def summary
    "#{self.object.firstname} #{self.object.lastname}"
  end
end
