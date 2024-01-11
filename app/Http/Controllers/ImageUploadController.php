<?php

namespace App\Http\Controllers;

use App\Models\UserImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ImageUploadController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'images.*' => 'image|mimes:jpeg,png,jpg,gif',
        ]);

        // dd($image = $request->file('images'));
        $user = Auth::user();

        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public/images', $imageName); // Store images in storage/app/public/images

                $imagePaths = asset('storage/images/' . $imageName); // Get the public URL of the uploaded image
                UserImage::create([
                    'user_id' => $user->id,
                    'image' => $imagePaths,
                ]);
            }

            return redirect()->back()->with('success', 'Image uploaded!');
        }
            return redirect()->back()->with('error', 'No images were uploaded!');
            // return response()->json(['message' => 'No images were uploaded.']);
    }


    public function destroy($id){
        $user = Auth::user();
        $image = UserImage::find($id);

        if ($image && $image->user_id === $user->id) {
            Storage::delete('public/images/' . $image->image);

            $image->delete();

            return redirect()->back()->with('success', 'Image deleted!');
        }

        return redirect()->back()->with('errors', 'Image not found or unauthorized');
    }


    public function updateprofileimage(Request $request){
        $user = Auth::user();

        $request->validate([
            'images.*' => 'image|mimes:jpeg,png,jpg,gif',
        ]);

        // dd($image = $request->file('images'));
        $user = Auth::user();

        if ($request->hasFile('images')) {
            $imagePaths = [];
            foreach ($request->file('images') as $image) {
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images', $imageName); // Store images in storage/app/public/images

                $imagePaths = asset('storage/images/' . $imageName); // Get the public URL of the uploaded image
                $user->update([
                    'profile_image' => $imagePaths,
                ]);
            }

            return redirect()->back()->with('success', 'Image uploaded!');
        }
            return redirect()->back()->with('error', 'No images were uploaded!');
    }
}
