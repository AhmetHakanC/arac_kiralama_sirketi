import {useState} from "react";
import axios from "axios";
import Layout from "../../Layouts/Layout";
import {Input} from "../../Components/Input";

export function EmployessCreatePage() {
    const [isim, setIsim] = useState('');
    const [soyisim, setSoyIsim] = useState('');
    const [kimlik_numarasi, setKimlikNumarasi] = useState('');
    const [telefon_numarasi, setTelefonNumarasi] = useState('');
    const [eposta, setEPosta] = useState('');
    const [pozisyon, setPozisyon] = useState('');
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8080/employee/add', {
            personelAd: isim,
            personelSoyad: soyisim,
            personelKimlik: kimlik_numarasi,
            personelTelefon: telefon_numarasi,
            personelEmail: eposta,
            personelPozisyon: pozisyon,
        }).then((response) => {
            if (response.data.success) {
                alert(response.data.message);
                window.location.href = '/employess';
            }
            else {
                alert(response.data.message);
            }
        });
    }

    return (
        <Layout>
            <div className="bg-white  flex flex-col">

                <div className="h-16 px-10">
                    <div className="h-full border-b border-gray-500 flex items-center justify-between">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Personel Ekle</h2>
                    </div>
                </div>

                <div className="h-full bg-white flex justify-center mt-8 overflow-auto mb-10">
                    <div className="w-[54%] rounded-lg border border-gray-400 p-4">
                        <form onSubmit={submit} className="p-2 space-y-8">
                            <div className="text-lg leading-6 font-medium text-gray-900">Yeni Personel Oluştur</div>

                            <div className="flex flex-row space-x-4 justify-between">
                                <Input label="İsim" value={isim} setValue={(e) => setIsim(e.target.value)}/>
                                <Input label="Soyisim" value={soyisim} setValue={(e) => setSoyIsim(e.target.value)}/>
                                <Input label="Pozisyon" value={pozisyon} setValue={(e) => setPozisyon(e.target.value)}/>
                            </div>

                            <div className="flex flex-row space-x-4 justify-between">
                                <Input label="Kimlik Numarası" value={kimlik_numarasi} setValue={(e) => setKimlikNumarasi(e.target.value)}/>
                                <Input label="Telefon Numarası" value={telefon_numarasi} setValue={(e) => setTelefonNumarasi(e.target.value)}/>

                            </div>

                            <div className="flex flex-row space-x-4 justify-between">
                                <Input label="E Posta" value={eposta} setValue={(e) => setEPosta(e.target.value)}/>
                            </div>

                            <div className="flex w-full justify-end items-center">
                                <button
                                    type="submit"
                                    className="bg-gray-900 flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-1 focus:outline-offset-1">
                                    Personel Oluştur
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
