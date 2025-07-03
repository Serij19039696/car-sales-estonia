
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const translations = {
  est: {
    title: 'Autode Müük Eestis',
    formTitle: 'Müü oma auto',
    name: 'Nimi',
    phone: 'Telefon',
    carDetails: 'Auto info',
    submit: 'Saada pakkumine',
  },
  rus: {
    title: 'Продажа Авто в Эстонии',
    formTitle: 'Продай свою машину',
    name: 'Имя',
    phone: 'Телефон',
    carDetails: 'Информация об авто',
    submit: 'Отправить предложение',
  },
  eng: {
    title: 'Car Sales in Estonia',
    formTitle: 'Sell Your Car',
    name: 'Name',
    phone: 'Phone',
    carDetails: 'Car Information',
    submit: 'Submit Offer',
  },
};

export default function CarSalesSite() {
  const [lang, setLang] = useState<'est' | 'rus' | 'eng'>('est');
  const t = translations[lang];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Tabs defaultValue="est" onValueChange={val => setLang(val as 'est' | 'rus' | 'eng')}>
        <TabsList className="flex justify-center mb-6">
          <TabsTrigger value="est">Eesti</TabsTrigger>
          <TabsTrigger value="rus">Русский</TabsTrigger>
          <TabsTrigger value="eng">English</TabsTrigger>
        </TabsList>
      </Tabs>

      <h1 className="text-3xl font-bold mb-4 text-center">{t.title}</h1>

      <Card className="shadow-xl p-6">
        <CardContent>
          <h2 className="text-xl font-semibold mb-4">{t.formTitle}</h2>
          <form className="grid gap-4">
            <Input placeholder={t.name} required />
            <Input placeholder={t.phone} required type="tel" />
            <Textarea placeholder={t.carDetails} required rows={5} />
            <Button className="w-full" type="submit">{t.submit}</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
