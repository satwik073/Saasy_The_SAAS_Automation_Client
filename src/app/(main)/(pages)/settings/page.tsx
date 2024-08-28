'use client';

import ProfileForm from '@/Forms/ProfileForm';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditUserProfileSchema } from '@/Constants/types';
type Props = {};
const Settings = (props: Props) => {
  const [isProfileFormLoading, setProfileFormLoading] = useState<boolean>(false);

  const formRepresentation = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: 'Satwik Kanhere',
      email: 'satwikkanhere2003@gmail.com',
    },
  });

  return (
    <div className="w-full flex flex-col md:p-12 p-3 relative">
      <h1 className="md:text-4xl text-xl sticky top-0 z-10 bg-background/200 backdrop-blur-lg flex">
        Settings
      </h1>
      <div className="py-8">
        <div>
          <h2 className="md:text-2xl dark:text-white text-lg">User Profile</h2>
          <p className="text-base text-gray-300 dark:text-white/50 py-2">Add or update your information</p>
        </div>
        <div className="wrapper py-10">

        <ProfileForm/>
        </div>
      </div>
    </div>
  );
};

export default Settings;
