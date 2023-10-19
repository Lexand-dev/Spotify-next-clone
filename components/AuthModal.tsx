"use client"

import useAuthModal from "@/hooks/useAuthModal";
import {
  useSessionContext,
  useSupabaseClient
} from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import Modal from "./Modal";


const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const { onClose, isOpen} = useAuthModal();

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }
  , [session, router, onClose]);

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  return ( 
    <Modal 
      title="Welcome to Spotify Clone"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth 
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#1DB954',
                brandAccent: '#1ED760',
              }
            }
          }  
        }
        }
        providers={['github']}
        magicLink
      />
    </Modal>
  );
}

export default AuthModal;