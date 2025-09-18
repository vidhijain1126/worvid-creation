import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

// Google Sheets submission
export const submitToGoogleSheets = async (formData: FormData) => {
  try {
    // Replace with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
    
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString()
      })
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return { success: false, error };
  }
};

// Supabase submission
export const submitToSupabase = async (formData: FormData) => {
  try {
    if (!supabase) {
      return { success: false, error: 'Supabase not configured' };
    }
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw error;
    }

    console.log('Form submitted successfully to Supabase:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting to Supabase:', error);
    return { success: false, error };
  }
};

// Baserow submission
export const submitToBaserow = async (formData: FormData) => {
  try {
    const apiToken = import.meta.env.VITE_BASEROW_API_TOKEN as string;
    const tableId = import.meta.env.VITE_BASEROW_TABLE_ID as string;
    const baserowBaseUrl = (import.meta.env.VITE_BASEROW_BASE_URL as string) || 'https://api.baserow.io';

    if (!apiToken || !tableId) {
      console.error('Missing Baserow configuration. Ensure VITE_BASEROW_API_TOKEN and VITE_BASEROW_TABLE_ID are set.');
      return { success: false, error: 'Missing Baserow configuration' };
    }

    const endpoint = `${baserowBaseUrl}/api/database/rows/table/${tableId}/?user_field_names=true`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Baserow error:', errorText);
      return { success: false, error: errorText };
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting to Baserow:', error);
    return { success: false, error };
  }
};

// Test Supabase connection
export const testSupabaseConnection = async () => {
  try {
    if (!supabase) {
      return { connected: false, error: 'Supabase not configured' };
    }
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('count', { count: 'exact', head: true });

    if (error) {
      console.error('Supabase connection test failed:', error);
      return { connected: false, error };
    }

    console.log('Supabase connection successful');
    return { connected: true, count: data };
  } catch (error) {
    console.error('Supabase connection test error:', error);
    return { connected: false, error };
  }
};

// Get all contact submissions (for admin use)
export const getContactSubmissions = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching submissions:', error);
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error getting contact submissions:', error);
    return { success: false, error };
  }
};