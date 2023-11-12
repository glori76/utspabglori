import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

const Profile = () => {
  const [transaksi, setTransaksi] = useState([
    {
      nama: 'Lips',
      jumlah: 0,
    },
    {
      nama: 'Cushion',
      jumlah: 0,
    },
    {
      nama: 'Blush On',
      jumlah: 0,
    },
    {
      nama: 'Eyebrow',
      jumlah: 0,
    },
    {
      nama: 'Foundation',
      jumlah: 0,
     },
    {
      nama: 'Sunscreen',
      jumlah: 0,
    },
    {
      nama: 'Mascara',
      jumlah: 0,
    },
    {
      nama: 'Nail Polish',
      jumlah: 0,
    },
    {
      nama: 'Concealer',
      jumlah: 0,
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 10 }}>
        <Text style={{ color: 'black', fontSize: 20 }}>Transaksi</Text>
      </View>
      <View style={{ width: '100%', borderTopWidth: 1, borderTopColor: '#000' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <Text style={{ width: '50%' }}>Nama</Text>
          <Text style={{ width: '50%' }}>Jumlah</Text>
        </View>
        {transaksi.map((item) => (
          <View key={item.nama} style={{ flexDirection: 'row', alignItems: 'center', padding: 15 }}>
            <Text style={{ width: '50%' }}>{item.nama}</Text>
            <Text style={{ width: '50%' }}>{item.jumlah}</Text>
          </View>
        ))}
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button title="Masuk" onPress={() => { setTransaksi([...transaksi, { nama: 'Lips', jumlah: 1 }]); }} />
        <Button title="Keluar" onPress={() => { setTransaksi([...transaksi, { nama: 'Tidak ada', jumlah: 0 }]); }} />
      </View>
    </View>
  );
};

export default Profile;