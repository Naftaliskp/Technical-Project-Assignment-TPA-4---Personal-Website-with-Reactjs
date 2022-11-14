import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HeaderText from "../components/HeaderText";

const Blog = () => {
  const navigate = useNavigate();
  const tambahHandler = () => {
    navigate("/properti");
  };
  return (
    <div className='container'>
      <ButtonHeader className='ButtonHeader'>
        <HeaderText
          TitleText={`Artikel Tentang Teknologi Informasi`}
          DescriptionText={`Karena saya adalah mahasiswa Teknologi Informasi, maka di sini saya akan menjelaskan apa itu teknologi informasi`}
        ></HeaderText>
      </ButtonHeader>
      <CardJadwal>
          <div className='desc'>
          Menurut Wikipedia Teknologi Informasi (TI), atau dalam bahasa Inggris dikenal dengan istilah Information technology (IT) adalah istilah umum untuk teknologi apa pun yang membantu manusia dalam membuat, mengubah, menyimpan, mengomunikasikan dan/atau menyebarkan informasi. IT menyatukan komputasi dan komunikasi berkecepatan tinggi untuk data, suara, dan video. Contoh dari Teknologi Informasi bukan hanya berupa komputer pribadi, tetapi juga telepon, TV, peralatan rumah tangga elektronik, dan peranti genggam modern (misalnya ponsel).

Teknologi Informasi juga merupakan salah satu progam studi yang berada di beberapa univeristas dan merupakan salah satu prodi yang diminati oleh calon mahasiswa. Pada prodi IT Mahasiswa akan diberikan pembelajaran konsep dasar computing dan matematika, prinsip teknologi informasi, standar dalam teknologi informasi, proses analisis, perencanaan , pengelolaan dan evaluasi terkait sumber daya informasi, keterampilan umum dan khusus.
Pada umumnya program studi Teknologi Informasi memiliki lima bidang keahlian utama yaitu :

1.      Keamanan siber (Cyber Security)
2.      Keamanan aplikasi
3.      Integrasi sistem
4.      Layanan awan
5.      Internet of things. 
Dengan lima bidang keahlian pada program studi Teknologi informasi, lapangan kerja bagi lulusan yaitu bidang spesialis keamanan siber, analis keamanan aplikasi, spesialis integrasi sistem, pengembang layanan awan dan spesialis IoT (Internet of Things). Jenis pekerjaan bidang lainnya antara lain arsitektur IT (layanan awan), help desk IT support, network administration & systems administration, network security, database development & database administration, web development & web programming, computer operator, engineering data network, administrator database, keamanan Infrastruktur dan perangkat lunak, teknisi network & sistem.
        </div>
      </CardJadwal>
    </div>
  );
};

const ButtonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .buttonTambah {
    display: flex;
    align-items: center;
    gap: 15px;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #0d3de5;
    cursor: pointer;
  }
`;

const CardJadwal = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  padding: 24px 39px;
  box-shadow: 0px 6px 10px rgba(221, 235, 255, 0.85);
  border-radius: 15px;
  .jadwalInformation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    .timeDate {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 400;
      font-size: 18px;
      line-height: 30px;
      color: #000000;
    }
    .cancelReschedule {
      display: flex;
      gap: 16px;

      .jadwalButton {
        padding: 10px 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 28px;
      }

      #cancel {
        color: #f84747;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border: 1px solid #f84747;
        border-radius: 15px;
      }

      #reschedule {
        color: #f89047;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
        border: 1px solid #f89047;
        border-radius: 15px;
      }
    }
  }

  .jadwalDescription {
    margin-top: 34px;
    display: flex;
    gap: 18px;
    min-height: 253px;
    .description {
      width: 67%;
      ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: space-between;
        position: relative;
        padding-left: 50px;
        /* &::after {
          content: "";
          position: absolute;
          width: 3px;
          height: calc(100% - 23px);
          background-color: #83cf3e;
          left: 15px;
          top: 0px;
          z-index: -1;
          margin-top: 13px;
        } */

        li {
          padding: 10px 0px;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: #83cf3e;
            left: -46px;
            top: -7px;
            z-index: 1;
            margin-top: 15px;
            border-radius: 50%;
          }

          &::after {
            content: "";
            position: absolute;
            width: 3px;
            height: calc(100%);
            background-color: #83cf3e;
            left: -35px;
            top: 0px;
            z-index: -1;
            margin-top: 13px;
          }

          &.wait::after {
            background-color: #797c86;
          }

          &.nope::after {
            height: 0px;
          }

          &.active::before {
 
            z-index: 1;
          }

          &.wait::before {
            background: white;
            border: solid 1px #83cf3e;
          }

          &.nope::before {
            background: white;
            border: 2px solid #797c86;
          }
        }
      }
      .decsTitle {
        font-weight: 500;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
      }

      .desc {
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
      }
    }

    .gambarRumah {
      width: 33%;
      padding: 15px 15px;
      background: linear-gradient(
          180.11deg,
          rgba(255, 255, 255, 0) 0.1%,
          #000000 99.9%
        ),

      background-size: cover;
      border-radius: 10px;
      position: relative;

      .info {
        position: absolute;
        bottom: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        .namaRumah {
          font-weight: 600;
          font-size: 18px;
          line-height: 28px;
          color: #ffffff;
        }
        .alamatLengkap {
          display: flex;
          gap: 5px;
          align-items: center;
          font-weight: 400;
          font-size: 12px;
          line-height: 18px;
          color: #ffffff;
        }
      }
    }
  }
`;

export default Blog;
