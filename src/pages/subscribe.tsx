import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { bloodSupplyApiService } from '../features/blood-supplies/api/api-services/blood-supply.api-service';
import { bloodSuppliesRepositoryProvider } from '../features/blood-supplies/api/data/blood-supplies.repository-provider';
import { BloodSupply } from '../features/blood-supplies/models/bloor-supply';
import styles from '../styles/Home.module.css';

type SubscribePageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const SubscribePage: NextPage<SubscribePageProps> = ({ isError, data }) => {
  return (
    <div>
      <h1>Subscribe page</h1>
      <ul>
        {data.map((d) => {
          return (
            <li key={d.city}>
              <p>City:</p>
              <p>{d.city}</p>
              <br />
              <p>Blood levels:</p>
              <p>{d.bloodLevels}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubscribePage;

export const getServerSideProps: GetServerSideProps<{
  data: BloodSupply[];
  isError: boolean;
}> = async () => {
  const props = {
    isError: true,
    data: [],
  };

  const response = await bloodSupplyApiService.getAllBloodSupplies();

  console.log({ response });

  if (response.ok) {
    props.isError = false;
    props.data = response.value;
  }

  return {
    props,
  };
};
