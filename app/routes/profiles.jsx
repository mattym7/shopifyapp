import { useState } from 'react';

export default function Profiles() {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ buttonId: '', color: '', fontSize: '', text: '' });

  const fetchProfiles = async () => {
    const res = await fetch('/api/get-profiles?buttonId=button-123');
    setProfiles(await res.json());
  };

  const saveProfile = async () => {
    await fetch('/api/add-profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProfile),
    });
    fetchProfiles();
  };

  return (
    <div>
      <h1>Manage Button Profiles</h1>
      <input placeholder="Button ID" onChange={(e) => setNewProfile({ ...newProfile, buttonId: e.target.value })} />
      <input placeholder="Color" onChange={(e) => setNewProfile({ ...newProfile, color: e.target.value })} />
      <input placeholder="Font Size" onChange={(e) => setNewProfile({ ...newProfile, fontSize: e.target.value })} />
      <input placeholder="Text" onChange={(e) => setNewProfile({ ...newProfile, text: e.target.value })} />
      <button onClick={saveProfile}>Add Profile</button>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>{profile.text} - {profile.color}</li>
        ))}
      </ul>
    </div>
  );
}
