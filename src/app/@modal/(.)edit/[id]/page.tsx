import { getTaskById } from '@/data';
import Modal from './Modal';

export default async function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const task = await getTaskById(id);
  return <Modal task={task} />;
}
