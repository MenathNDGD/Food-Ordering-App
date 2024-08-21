import EditableImage from "@/components/layout/EditableImage";

export default function UserForm(user) {
    const [userName, setUserName] = useState(user?.userName || '');
  const [image, setImage] = useState(user?.image || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [streetAddress, setStreetAddress] = useState(user?.streetAddress || '');
  const [postalCode, setPostalCode] = useState(user?.postalCode || '');
  const [city, setCity] = useState(user?.city || '');
  const [country, setCountry] = useState(user?.country || '');
  
  return (
    <div className="flex gap-4">
      <div>
        <div className="relative p-2 bg-gray-300 rounded-lg max-w-[120px]">
          <EditableImage link={image} setLink={setImage} />
        </div>
      </div>
      <form className="grow" onSubmit={handleProfileInfoUpdate}>
        <label>First & Last Name</label>
        <input
          type="text"
          placeholder="First & Last Name"
          value={userName}
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <label>Email</label>
        <input type="email" value={"session.data.user.email"} disabled={true} />
        <label>Phone</label>
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(ev) => setPhone(ev.target.value)}
        />
        <label>Street Address</label>
        <input
          type="text"
          placeholder="Street Address"
          value={streetAddress}
          onChange={(ev) => setStreetAddress(ev.target.value)}
        />
        <div className="flex gap-2">
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              placeholder="Postal Code"
              value={postalCode}
              onChange={(ev) => setPostalCode(ev.target.value)}
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={(ev) => setCity(ev.target.value)}
            />
          </div>
        </div>
        <label>Country</label>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(ev) => setCountry(ev.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
